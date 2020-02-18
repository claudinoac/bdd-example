import { Given, When, Then } from 'cucumber';
import { Selector } from 'testcafe';

Given('I\'ve accessed the people register view', async (t) => {
    await t.navigateTo('http://localhost:8080/');
});

Given(/^it has the fields "(.+)", "(.+)" and "(.+)"$/, async (t, fields) => {
    await fields.forEach(async (field) => {
        await t.expect(Selector(`.form-card .field-${field} input`).exists).ok();
        // await t.expect(false).ok(); //will fail this step
    });
});

When(/^I fill the fields with name "(.+)", age "(.+)", email "(.+)"$/, async (t, [name, age, email]) => {
    await t.typeText('.form-card .field-name input', name);
    await t.typeText('.form-card .field-age input', age);
    await t.typeText('.form-card .field-email input', email);
});

When('I click in the submit button', async (t) => {
    await t.click('.form-card button');
});

Then(/^a card with name "(.+)", age "(.+)", email "(.+)" should appear$/, async (t, [name, age, email]) => {
    await t.expect(
        Selector('.person-card .v-card__title').textContent,
    ).eql(name);
    await t.expect(
        Selector('.person-card .age').textContent,
    ).contains(age);
    await t.expect(
        Selector('.person-card .email').textContent,
    ).contains(email);
});

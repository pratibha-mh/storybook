import { expect, userEvent, within } from '@storybook/test';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const myStory = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/AB278C4qHSOF9toyPk0t2O/Storybook?node-id=0-1",
    },
  },
};

export const LoggedOut = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

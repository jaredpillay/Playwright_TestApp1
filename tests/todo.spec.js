import { test, expect } from '@playwright/test';

test('to-do app - add, complete, and delete todos', { tag: '@sanity' }, async ({ page }) => {
  // Navigate to TodoMVC app
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  const todoInput = page.getByTestId('text-input');
  const todoList = page.getByTestId('todo-list');

  // Add three todos
  await todoInput.fill('Buy Groceries');
  await todoInput.press('Enter');
  
  await todoInput.fill('Go for walk');
  await todoInput.press('Enter');
  
  await todoInput.fill('Code');
  await todoInput.press('Enter');

  // Mark todos as completed
  await page.getByRole('listitem').filter({ hasText: 'Go for walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Code' }).getByTestId('todo-item-toggle').check();

  // Verify todos are in the list
  await expect(todoList).toContainText('Buy Groceries');
  await expect(todoList).toContainText('Go for walk');
  await expect(todoList).toContainText('Code');

  // Clear completed todos
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // Verify completed todos are removed
  await expect(todoList).toContainText('Buy Groceries');
  await expect(todoList).not.toContainText('Go for walk');
  await expect(todoList).not.toContainText('Code');

 // await expect(todoList).toHaveCount(4);
});
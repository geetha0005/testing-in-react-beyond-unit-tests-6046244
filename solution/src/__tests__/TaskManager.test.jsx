import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

// describe('Task Manager Integration Tests', () => {
//   it('allows user to type into input field', async () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/enter task/i);

//     await userEvent.type(input, 'Learn Testing');
//     expect(input).toHaveValue('Learn Testing');
//   });

//   it('adds task to the task list', async () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/enter task/i);
//     const addButton = screen.getByRole('button', { name: /add/i });

//     await userEvent.type(input, 'Write documentation');
//     await userEvent.click(addButton);

//     expect(screen.getByText('Write documentation')).toBeInTheDocument();
//   });

//   it('increments task counter when task is added', async () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/enter task/i);
//     const addButton = screen.getByRole('button', { name: /add/i });

//     await userEvent.type(input, 'Record video');
//     await userEvent.click(addButton);

//     expect(screen.getByText(/total tasks: 1/i)).toBeInTheDocument();
//   });

//   it('supports adding multiple tasks correctly', async () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/enter task/i);
//     const addButton = screen.getByRole('button', { name: /add/i });

//     await userEvent.type(input, 'Task 1');
//     await userEvent.click(addButton);

//     await userEvent.type(input, 'Task 2');
//     await userEvent.click(addButton);

//     expect(screen.getByText('Task 1')).toBeInTheDocument();
//     expect(screen.getByText('Task 2')).toBeInTheDocument();
//     expect(screen.getByText(/total tasks: 2/i)).toBeInTheDocument();
//   });
// });

describe("Task Manager Integration Tests", () => {
  let input, addButton;

  beforeEach(() => {
    render(<App />);
    input = screen.getByPlaceholderText(/enter task/i);
    addButton = screen.getByRole("button", { name: /add/i });
  });

  const addTask = async (task) => {
    await userEvent.type(input, task);
    await userEvent.click(addButton);
  };

  describe("Input behavior", () => {
    it("allows user to type into input field", async () => {
      await userEvent.type(input, "Learn Testing");
      expect(input).toHaveValue("Learn Testing");
    });
  });

  describe("Task addition", () => {
    it("adds task to the task list", async () => {
      await addTask("Write documentation");
      expect(screen.getByText("Write documentation")).toBeInTheDocument();
    });

    it("increments task counter when task is added", async () => {
      await addTask("Record video");
      expect(screen.getByText(/total tasks: 1/i)).toBeInTheDocument();
    });

    it("supports adding multiple tasks correctly", async () => {
      await addTask("Task 1");
      await addTask("Task 2");
      expect(screen.getByText("Task 1")).toBeInTheDocument();
      expect(screen.getByText("Task 2")).toBeInTheDocument();
      expect(screen.getByText(/total tasks: 2/i)).toBeInTheDocument();
    });
  });
});

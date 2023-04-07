package ToDo_Application;

import java.awt.*;
import javax.swing.*;
import javax.swing.text.BadLocationException;

import java.util.ArrayList;
import java.util.List;

public class ToDoApp {
    private JFrame frame;
    private JPanel panel;
    private JButton addButton;
    private JButton editButton;
    private JButton removeButton;
    private JTextField taskInput;
    private JTextArea taskTextArea;
    private List<String> taskList;

    // Constructs a ToDoApp object and initializes the app
    public ToDoApp() {
        frame = new JFrame("ToDo App");
        panel = new JPanel();
        addButton = new JButton("Add");
        editButton = new JButton("Edit");
        removeButton = new JButton("Remove");
        taskInput = new JTextField(20);
        taskTextArea = new JTextArea(10, 20);
        taskList = new ArrayList<>();

        // Set up the layout
        panel.setLayout(new BorderLayout());
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(addButton);
        buttonPanel.add(editButton);
        buttonPanel.add(removeButton);
        panel.add(taskInput, BorderLayout.NORTH);
        panel.add(buttonPanel, BorderLayout.EAST);
        panel.add(new JScrollPane(taskTextArea), BorderLayout.CENTER);

        // Set up the button actions
        addButton.addActionListener(e -> addTask());
        editButton.addActionListener(e -> editTask());
        removeButton.addActionListener(e -> removeTask());

        // Set up the text field action
        taskInput.addActionListener(e -> addTask());

        // Set up the frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setContentPane(panel);
        frame.pack();
        frame.setVisible(true);
    }

    // Add a new task to the list
    private void addTask() {
        String task = taskInput.getText().trim();
        if (!task.isEmpty()) {
            taskList.add(task);
            updateTaskList();
            taskInput.setText("");
        }
    }

    // Edit the selected task
    private void editTask() {
        int selectedIndex = getSelectedIndex();
        if (selectedIndex != -1) {
            String task = taskInput.getText().trim();
            if (!task.isEmpty()) {
                taskList.set(selectedIndex, task);
                updateTaskList();
                taskInput.setText("");
            }
        }
    }

    // Remove the selected task
    private void removeTask() {
        int selectedIndex = getSelectedIndex();
        if (selectedIndex != -1) {
            taskList.remove(selectedIndex);
            updateTaskList();
        }
    }

    /**
     * Get the selected index in the text area.
     *
     * @return the index of the selected task in the task list, or -1 if no task is
     *         selected.
     */
    private int getSelectedIndex() {
        int start = taskTextArea.getSelectionStart();
        int end = taskTextArea.getSelectionEnd();
        if (start == end) {
            return -1;
        } else {
            try {
                int selectedLine = taskTextArea.getLineOfOffset(start);
                int lineStartOffset = taskTextArea.getLineStartOffset(selectedLine);
                int lineEndOffset = taskTextArea.getLineEndOffset(selectedLine);
                String line = taskTextArea.getText(lineStartOffset, lineEndOffset - lineStartOffset);
                String[] parts = line.split("\\. ");
                if (parts.length > 0) {
                    try {
                        return Integer.parseInt(parts[0]) - 1;
                    } catch (NumberFormatException e) {
                        return -1;
                    }
                } else {
                    return -1;
                }
            } catch (BadLocationException e) {
                return -1;
            }
        }
    }

    // Update the text in the task text area
    private void updateTaskList() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < taskList.size(); i++) {
            sb.append(String.format("%d. %s\n", i + 1, taskList.get(i)));
        }
        taskTextArea.setText(sb.toString());
    }

    // Main method to run the app
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new ToDoApp();
            }
        });
    }
}

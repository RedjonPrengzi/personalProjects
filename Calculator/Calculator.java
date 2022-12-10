package Calculator;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Calculator {
  // create a frame
  JFrame frame = new JFrame("Calculator");
  
  // create a text field
  JTextField textField = new JTextField();

  // create number buttons
  JButton button0 = new JButton("0");
  JButton button1 = new JButton("1");
  JButton button2 = new JButton("2");
  JButton button3 = new JButton("3");
  JButton button4 = new JButton("4");
  JButton button5 = new JButton("5");
  JButton button6 = new JButton("6");
  JButton button7 = new JButton("7");
  JButton button8 = new JButton("8");
  JButton button9 = new JButton("9");
  
  // create operator buttons
  JButton buttonAdd = new JButton("+");
  JButton buttonSubtract = new JButton("-");
  JButton buttonMultiply = new JButton("*");
  JButton buttonDivide = new JButton("/");
  JButton buttonEquals = new JButton("=");
  JButton buttonBackspace = new JButton("\u2190"); // Unicode for the back arrow character

  // create a variable to store the result of the operations
  double result;
  
  // create a variable to store the operator
  String operator;

  public static void main(String[] args) {
    // create a new instance of the Calculator class
    Calculator calculator = new Calculator();
  }
  

  public Calculator() {
    // set the text field to be uneditable
    textField.setEditable(false);
    
    // set the font of the text field
    textField.setFont(new Font("Arial", Font.PLAIN, 20));
    
    // set the size of the text field
    textField.setPreferredSize(new Dimension(200, 40));
    
    // create a panel for the buttons
    JPanel panel = new JPanel();
    
    // set the layout of the panel to GridLayout
    panel.setLayout(new GridLayout(4, 4));
    
    // add the buttons to the panel
    panel.add(button1);
    panel.add(button2);
    panel.add(button3);
    panel.add(buttonAdd);
    panel.add(button4);
    panel.add(button5);
    panel.add(button6);
    panel.add(buttonSubtract);
    panel.add(button7);
    panel.add(button8);
    panel.add(button9);
    panel.add(buttonMultiply);
    panel.add(button0);
    panel.add(buttonEquals);
    panel.add(buttonDivide);
    panel.add(buttonBackspace);

    // create a panel for the text field
    JPanel panelTextField = new JPanel();
    
    // add the text field to the panel
    panelTextField.add(textField);
    
    // add the panels to the frame
    frame.add(panel, BorderLayout.CENTER);
    frame.add(panelTextField, BorderLayout.NORTH);
    
   // add action listeners to the buttons
button0.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "0");
    }
  });
  
  button1.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "1");
    }
  });
  
  button2.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "2");
    }
  });
  
  button3.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "3");
    }
  });
  
  button4.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "4");
    }
  });
  
  button5.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "5");
    }
  });
  
  button6.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "6");
    }
  });
  
  button7.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "7");
    }
  });
  
  button8.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "8");
    }
  });
  
  button9.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      textField.setText(textField.getText() + "9");
    }
  });
  
  buttonAdd.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      result = Double.parseDouble(textField.getText());
      operator = "+";
      textField.setText("");
    }
  });
  
  buttonSubtract.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      result = Double.parseDouble(textField.getText());
      operator = "-";
      textField.setText("");
    }
  });
  
  buttonMultiply.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      result = Double.parseDouble(textField.getText());
      operator = "*";
      textField.setText("");
    }
  });
  
  buttonDivide.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      result = Double.parseDouble(textField.getText());
      operator = "/";
      textField.setText("");
    }
  });
  
  buttonEquals.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      double secondOperand = Double.parseDouble(textField.getText());
      if (operator == "+") {
        result = result + secondOperand;
      } else if (operator == "-") {
        result = result - secondOperand;
      } else if (operator == "*") {
        result = result * secondOperand;
      } else if (operator == "/") {
        result = result / secondOperand;
      }
      textField.setText(String.valueOf(result));
    }
  });

buttonBackspace.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
      // get the current text in the text field
      String text = textField.getText();
      
      // if the text field is not empty
      if (!text.isEmpty()) {
        // remove the last character from the text
        text = text.substring(0, text.length() - 1);
        
        // update the text in the text field
        textField.setText(text);
      }
    }
  });
  
  
  // set the size of the frame
  frame.setSize(300, 350);
  
  // set the default close operation of the frame
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  
  // make the frame visible
  frame.setVisible(true);
}}
  
  
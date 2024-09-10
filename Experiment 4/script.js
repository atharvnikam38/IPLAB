// Person class
class Person {
  constructor(name, address, email, phone) {
      this.name = name;
      this.address = address;
      this.email = email;
      this.phone = phone;
  }

  // Method to display details
  displayDetails() {
      return `Name: ${this.name}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone: ${this.phone}`;
  }
}

// Student class inherits from Person
class Student extends Person {
  constructor(name, address, email, phone, rollNo) {
      super(name, address, email, phone);
      this.rollNo = rollNo;
  }

  // Method to display details with roll number
  displayDetails() {
      return `${super.displayDetails()}\nRoll Number: ${this.rollNo}`;
  }

  // Method to validate roll number
  validateRollNo() {
      if (this.rollNo <= 0) {
          throw new Error("Roll number must be greater than zero.");
      }
  }
}

// Function to validate form data
function validateForm() {
  const tagline = document.getElementById('tagline').value;
  const phone = document.getElementById('phone').value;

  // Validate tagline length
  if (tagline.length > 50) {
      alert("Tagline must be 50 characters or fewer.");
      return false;
  }

  // Validate phone number format
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
  }

  return true;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
      return;
  }

  const form = event.target;
  const formData = new FormData(form);

  // Create a receipt
  const receiptDate = new Date();
  const receipt = `
      Receipt Date: ${receiptDate.toLocaleDateString()}
      Tagline: ${formData.get('tagline')}
      Color: ${formData.get('color')}
      Size: ${formData.get('size')}
      Quantity: ${formData.get('quantity')}
      Delivery Date: ${formData.get('deliveryDate')}
      Name: ${formData.get('name')}
      Address: ${formData.get('address')}
      Email: ${formData.get('email')}
      Phone: ${formData.get('phone')}
      Comments: ${formData.get('comments')}
  `;

  alert("Order Received!\n" + receipt);

  // Example usage of Person and Student classes
  try {
      const person = new Person(
          formData.get('name'),
          formData.get('address'),
          formData.get('email'),
          formData.get('phone')
      );
      console.log(person.displayDetails());

      const student = new Student(
          formData.get('name'),
          formData.get('address'),
          formData.get('email'),
          formData.get('phone'),
          0 // Example roll number, could be another input
      );
      student.validateRollNo(); // Will throw error
      console.log(student.displayDetails());
  } catch (error) {
      alert("Error: " + error.message);
  }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
});

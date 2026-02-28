# Basics



## Native components
Welcome to the world of mobile development! You’ve got a solid foundation here. Think of React Native like building with LEGO blocks: each "component" is a specific block that does one job.

Here is a breakdown of your current code and an updated version with more essential components for your `README.md`.

---

## 📱 React Native Basics: The "LEGO" Blocks

In mobile development, we don't use HTML tags like `<div>` or `<h1>`. Instead, we use native components that the phone understands:

* **`View`**: The "Container." It's like a `<div>`. It holds other elements and helps with layout.
* **`Text`**: For all your words. You cannot put text directly inside a `View` without this tag.
* **`StyleSheet`**: This is your CSS. It keeps your styles organized and makes the app run faster.
* **`TextInput`**: An input field for the user to type (keyboards, emails, passwords).
* **`ActivityIndicator`**: That spinning loading wheel we all know and love.

---

## 🚀 Enhanced Code (With More Essentials)

I've added a **`Button`** (for interaction), **`ScrollView`** (so your app doesn't get cut off on small screens), and **`TouchableOpacity`** (a better way to make custom buttons).

```javascript
import React, { useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  ActivityIndicator, 
  Button, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";
import { Image } from "expo-image";

export default function Index() {
  const [loading, setLoading] = useState(false);

  return (
    // ScrollView allows users to swipe up/down if content is too long
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Welcome to Native</Text>
      
      <Image 
        source={{uri:"https://cdn.pixabay.com/photo/2026/02/17/14/46/xusenru-aral-sea-10129034_1280.jpg"}}
        style={styles.image}
      />

      <TextInput 
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      {/* Standard Blue Button */}
      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />

      {/* Custom Button using TouchableOpacity */}
      <TouchableOpacity style={styles.customButton}>
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableOpacity>

      {/* Loading Spinner */}
      <ActivityIndicator size="large" color="#0000ff" animating={loading} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20, // Rounded corners!
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  }
});

```

---

## 💡 Key Tips for Beginners

1. **Flexbox**: In React Native, `flexDirection` defaults to `column` (stacked vertically), whereas on the web it defaults to `row`.
2. **Units**: Notice there are no `px` units. Numbers like `width: 200` are "density-independent pixels" (they scale automatically for iPhone and Android).
3. **The Keyboard**: When you use `TextInput`, the keyboard might cover your input. Using a `ScrollView` or specialized components like `KeyboardAvoidingView` helps fix this.

# second Routing

You’ve just stepped into **Expo Router**, which is the modern way to handle navigation in React Native. It works very similarly to how websites work: your file structure determines your routes.

Think of it as a **Stack of Cards**. When you navigate to a new screen, you are placing a new card on top of the old one. When you go back, you "pop" the top card off.

---

## 🏗️ 1. The Layout (`_layout.tsx`)

The `RootLayout` is the "Parent" of your app. It defines the theme and rules that apply to **every** screen inside it.

* **`<Stack>`**: This component manages the "stack" of screens.
* **`screenOptions`**: These are global settings.
* `headerStyle`: Changes the background color of the top bar.
* `headerTintColor`: Changes the color of the back button and title text.
* `animation`: Defines how the next screen appears (e.g., sliding up from the bottom).


* **`<Stack.Screen />`**: This allows you to override settings for specific files. For example, you told the app that the file `index.js` should have the title "Home" in the header.

---

## 🔗 2. The Link (`index.tsx`)

To move between screens, you use the **`<Link>`** component.

* **`href={"/about"}`**: This tells the app to look for a file named `about.js` (or `about.tsx`) in your `app` folder and display it.
* **Behavior**: When a user taps this, Expo Router automatically handles the transition animation and adds a "Back" button to the header of the new screen.

---

## 📂 3. Essential File Structure

For your code to work, your folder structure must look like this:

```text
app/
├── _layout.js   <-- Your Stack & screenOptions go here
├── index.js     <-- Your "Home" screen (where the Link is)
└── about.js     <-- The screen you are navigating to

```

---

## 🛠️ Improved Navigation Components

While `<Link>` is great for simple text, in real apps, you often want to navigate when a user clicks a **button** or finishes a **form**. For that, we use the `useRouter` hook.

### The Programmatic Way (Better for Buttons)

Update your `Index` component to include a button that triggers navigation:

```javascript
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router"; // 1. Import the router hook

export default function Index() {
  const router = useRouter(); // 2. Initialize the router

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Native</Text>
      
      {/* 3. Use a function to navigate */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push("/about")}
      >
        <Text style={styles.buttonText}>Go To About Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 },
  button: { 
    backgroundColor: "#1a54dc", 
    padding: 15, 
    borderRadius: 10 
  },
  buttonText: { color: "white", fontWeight: "bold" }
});

```

### Summary Table

| Method | Best For... | Example |
| --- | --- | --- |
| **`<Link>`** | Simple text links (like a website). | `href="/about"` |
| **`router.push()`** | Buttons, logic, or after an API call. | `router.push("/profile")` |
| **`router.replace()`** | Login screens (prevents going back). | `router.replace("/home")` |
| **`router.back()`** | Creating your own custom back button. | `router.back()` |

# 2 - Navigate with button
You’ve now combined the two main ways to move around an app! You have a **declarative** way (the Link) and a **programmatic** way (the Button).

Here is what is happening in your code "under the hood," explained simply for a newcomer.

---

## 🧭 The Two Ways to Navigate

### 1. The `<Link>` (Like a Website)

```javascript
<Link href={"/about"} style={styles.link}>Go To About Screen</Link>

```

* **How it works:** This is a component. It wraps your text and makes it "clickable."
* **Best for:** Simple navigation where you just want to go from Point A to Point B without any logic in between.

### 2. The `useRouter` & `Button` (Like an App)

```javascript
const router = useRouter(); 
...
<Button title="About Page" onPress={() => router.push("/about")} />

```

* **How it works:** `useRouter` is a **Hook**. It gives you a "remote control" (the `router` object) for your app's navigation.
* **Why use this?** Because often you don't want to just "go" to a page; you want to do something first. For example:
* Check if the Email `TextInput` is valid.
* Save data to a database.
* Wait for a loading spinner to finish.



---

## 🛠️ Adding the "Missing Pieces"

To make your app feel more professional, here are the next two concepts you'll need: **State** (to remember what the user types) and **External Linking**.

### Updated Code with State and External Links

```javascript
import React, { useState } from "react"; // 1. Import useState
import { Button, Text, View, StyleSheet, TextInput, ActivityIndicator, Linking } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  
  // 2. State: This "remembers" what the user types in the box
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.includes("@")) {
      router.push("/about");
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      
      <TextInput 
        placeholder="Enter Email" 
        style={styles.input}
        onChangeText={(text) => setEmail(text)} // Update the state
        value={email}
      />

      <Button title="Login to About" onPress={handleLogin} />

      <Text 
        style={styles.externalLink} 
        onPress={() => Linking.openURL('https://google.com')}
      >
        Forgot Password? (Web Link)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 20 
  },
  externalLink: { marginTop: 20, color: 'blue', textDecorationLine: 'underline' }
});

```

---

## 📖 New Concepts for your README

| Component/Tool | What it does |
| --- | --- |
| **`useState`** | A React hook that stores data (like text in a form) while the app is running. |
| **`Linking`** | A React Native API used to open external websites, phone dialers, or map apps. |
| **`onChangeText`** | A prop for `TextInput` that runs a function every single time the user types a letter. |
| **`router.replace()`** | Like `.push()`, but it deletes the previous screen from history. Use this for Login screens so users can't "Go Back" to the login once they are inside the app. |


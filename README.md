# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






React Core Concepts

1.What is JSX, and why is it used?

JSX হলো JavaScript XML। এটি জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন যা আপনাকে জাভাস্ক্রিপ্ট কোডের মধ্যেই HTML-এর মতো স্ট্রাকচার লিখতে দেয়। এটি ব্যবহার করা হয় কারণ এটি ইউজার ইন্টারফেস (UI) কোডকে পঠনযোগ্য ও ডিক্লারেটিভ করে তোলে এবং লজিকের সাথে মার্কআপকে সহজে যুক্ত করে।

2.What is the difference between State and Props?

   টেবিল ব্যবহার না করে আপনার README ফাইলের জন্য স্টেট এবং প্রপসের সংজ্ঞা দুটোকে আরও পরিষ্কার এবং সুসংগঠিতভাবে নিচে দেওয়া হলো। এটি পড়তেও সহজ হবে এবং প্রফেশনাল দেখাবে। ✨

What is the difference between State and Props?

State (স্টেট):

স্টেট হলো কম্পোনেন্টের অভ্যন্তরীণ, পরিবর্তনযোগ্য (Mutable) ডেটা যা শুধুমাত্র সেই কম্পোনেন্টের মধ্যেই সংজ্ঞায়িত এবং পরিচালিত হয়।

    এটি useState হুক ব্যবহার করে তৈরি করা হয়।

    স্টেটের মূল উদ্দেশ্য হলো সময়ের সাথে পরিবর্তনশীল ডায়নামিক ডেটা (যেমন: কাউন্টার, টাস্কের বর্তমান তালিকা) সংরক্ষণ করা এবং সেই পরিবর্তন অনুযায়ী UI-কে পুনরায় রেন্ডার করা।

    স্টেট পরিবর্তন করতে সব সময় এর সেটার ফাংশন (setSomething) ব্যবহার করতে হয়।

Props (প্রপস):

প্রপস (Properties) হলো ডেটা পাস করার একটি প্রক্রিয়া, যেখানে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠানো হয়।

    প্রপস হলো অপরিবর্তনযোগ্য (Immutable)। চাইল্ড কম্পোনেন্ট কখনোই সরাসরি প্রাপ্ত প্রপস পরিবর্তন করতে পারে না; এটি শুধুমাত্র ডেটা পড়ার (Read-only) অনুমতি দেয়।

    এটির উদ্দেশ্য হলো চাইল্ড কম্পোনেন্টকে তার প্যারেন্ট থেকে ডেটা বা ফাংশন পাস করে কনফিগার করা এবং কম্পোনেন্টগুলোর মধ্যে যোগাযোগ স্থাপন করা। এটি React-এর একমুখী ডেটা প্রবাহ (Unidirectional Data Flow) নিশ্চিত করে।

3.What is the useState hook, and how does it work?

useState হলো একটি React hook যা ফাংশনাল কম্পোনেন্ট-এ স্টেট (ডায়নামিক ডেটা) যোগ করতে ব্যবহৃত হয়। এটি একটি অ্যারে রিটার্ন করে, যাতে থাকে বর্তমান স্টেটের মান এবং একটি সেটার ফাংশন। 
সেটার ফাংশনটি কল করলে স্টেট আপডেট হয় এবং কম্পোনেন্ট পুনরায় রেন্ডার হয়।

4.How can you share state between components in React?

স্টেট শেয়ার করার প্রধান উপায় হলো "Lifting State Up"। যে সকল কম্পোনেন্টের ডেটা প্রয়োজন, তাদের কাছের সাধারণ প্যারেন্ট কম্পোনেন্টে স্টেটটি ডিফাইন করা হয়।
এরপর প্যারেন্ট সেই স্টেট ডেটা এবং স্টেট পরিবর্তনের ফাংশনগুলোকে Props হিসেবে চাইল্ড কম্পোনেন্টগুলিতে পাস করে।

5.How is event handling done in React?

React-এ ইভেন্ট হ্যান্ডলিং HTML-এর মতোই, তবে ক্যামেলকেস (যেমন: onClick) ব্যবহার করা হয় এবং হ্যান্ডলার হিসেবে একটি স্ট্রিং এর বদলে সরাসরি একটি জাভাস্ক্রিপ্ট ফাংশন পাস করা হয়।
React নিশ্চিত করে যেন SyntheticEvent ব্যবহারের মাধ্যমে সকল ব্রাউজারে ইভেন্টগুলো একইরকম আচরণ করে।

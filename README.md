# **Book Store Faker**

A **React + TypeScript** web application that generates **fake book data** for testing book store applications.  
Includes **seeded random generation**, **infinite scrolling**, **dynamic locale support**, and **export to CSV**.
## https://book-store-elmira.netlify.app
<img width="1361" height="813" alt="Screenshot 2025-08-06 at 12 37 14" src="https://github.com/user-attachments/assets/de9c7f6b-938e-49d8-8022-0f202b49b0aa" />


---

## **Features**

- 🌍 **Multi-locale support**: English (US), Français (FR), Deutsch (DE)  
- 🎲 **Seeded random generation**:
  - Same seed → same books (deterministic)  
  - Changing the seed changes the entire dataset  
- ❤️ **Fractional likes & reviews** per book (e.g., 3.7 likes → 3 or 4 likes randomly)  
- 📖 **Book details expansion**:
  - Random **book cover with title & author**
  - Random reviews with author names  
- 🔄 **Infinite scrolling**:
  - Initial 20 books, +10 with each scroll  
- 📥 **Export to CSV** with full review details

---

## **Tech Stack**

- **Frontend**: React + TypeScript + Vite  
- **UI Library**: Material-UI (MUI)  
- **Random Data**: [faker-js/faker](https://github.com/faker-js/faker)  
- **CSV Export**: [PapaParse](https://www.papaparse.com/)  
- **Styling**: CSS & MUI SX Props


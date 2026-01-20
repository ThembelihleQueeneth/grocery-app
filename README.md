# Grocery List App 📱
![shopping_list_home](https://github.com/user-attachments/assets/e4a6339e-a6a3-4eb8-954c-88c5bcb5d674)

A sleek and efficient React Native shopping list application that helps you organize your groceries with ease.

## ✨ Features

- **Add Items**: Enter item name, quantity, and price to add to your list
- **Track Progress**: Visual progress indicator showing completed items
- **Filter Items**: View all, active, or completed items
- **Edit Items**: Modify existing items in your list
- **Delete Items**: Remove items with confirmation dialog
- **Real-time Total**: Automatically calculates total cost
- **Clean UI**: Modern, card-based design with soft colors

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe development
- **Expo** - Development toolchain
- **React Native Vector Icons** - Icon library

## 📱 Screens

### Home Screen
![shopping_list_home](https://github.com/user-attachments/assets/3a371592-2ff3-4355-a264-e93c2116bc9e)

- Main view showing all grocery items
- Progress tracker (0/5 completed)
- Total cost display (R326.98)
- Add item form with three input fields
- Filter buttons (All/Active/Completed)

### Edit Screen 
![shopping_list_edit](https://github.com/user-attachments/assets/d4eeaaf1-0fda-40d8-9bef-dde186fd3d71)

- Edit existing item details
- Pre-filled input fields
- Cancel/Save options

### Delete Confirmation 
![shopping_list_delete](https://github.com/user-attachments/assets/23514c84-f1fe-4982-841c-8167c9a9f8b6)

- Confirmation dialog before deletion
- Shows which item will be deleted
- Cancel/Delete options

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ThembelihleQueeneth/grocery-app.git
cd shopping-list-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Install Expo CLI globally (if not already installed)
```bash
npm install -g expo-cli
```

4. Start the development server
```bash
npm start
# or
expo start
```

5. Run on your preferred platform
```bash
# Press 'i' for iOS
# Press 'a' for Android
# Scan QR code with Expo Go app (physical device)
```

## 📁 Project Structure

```
shopping-list-app/
├── App.tsx
├── app/
│   ├── index.tsx          # Main screen component
│   ├── components/
│   │   ├── GroceryItem.tsx # Individual list item component
│   │   └── FilterButtons.tsx # Filter toggle component
│   └── types/
│       └── Grocery.ts     # TypeScript type definitions
├── assets/               # Images and icons
└── package.json
```

## 🎯 Key Components

### `index.tsx`

Main application screen containing:
- Header with progress and total
- Input form for adding items
- Filter buttons
- FlatList displaying grocery items

### `GroceryItem.tsx`
Individual list item component with:
- Item display (name, quantity, price)
- Edit functionality
- Delete functionality
- Completion toggle

### `FilterButtons.tsx`
Three-state filter buttons for:
- All items
- Active (uncompleted) items
- Completed items

## 📊 Data Model

```typescript
interface Grocery {
  id: string;        // Unique identifier
  name: string;      // Item name
  qty: number;       // Quantity
  price: number;     // Price per unit
  completed: boolean; // Completion status
}
```

## 🎨 Design System

- **Primary Color**: `#FF1493` (Deep Pink)
- **Background**: `#fff6f6` (Soft pink)
- **Cards**: White with subtle shadows
- **Typography**: Clear hierarchy with bold titles
- **Icons**: Ionicons from @expo/vector-icons

## 🔄 State Management

- Uses React's `useState` hook
- Local state for:
  - List of grocery items
  - Current filter (all/active/completed)
  - Form input values

## 💡 Usage Tips

1. **Adding Items**: Fill all three fields (Item, Quantity, Price) and tap "Add"
2. **Marking Complete**: Tap the checkbox next to any item
3. **Editing**: Tap the edit icon on any item
4. **Deleting**: Tap the delete icon, then confirm
5. **Filtering**: Use the three buttons above the list

## 🔧 Development

### Key Dependencies
```json
{
  "react": "18.2.0",
  "react-native": "0.73.0",
  "expo": "~49.0.0",
  "@expo/vector-icons": "^13.0.0",
  "typescript": "^5.1.0"
}
```

### Building for Production
```bash
# For iOS
expo build:ios

# For Android
expo build:android
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Ionicons](https://ionic.io/ionicons)
- Design inspiration from modern grocery apps
- React Native community for excellent documentation

---

**Happy Shopping!** 🛒

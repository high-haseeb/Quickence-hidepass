# 🔒 Quickence-hidepass

Quickence-hidepass is a Chrome extension designed to enhance security by hiding the 'show password' button on specified company websites. This helps prevent unauthorized access to admin passwords and ensures that sensitive information remains protected.

## ✨ Features

- 🔒 Hides 'show password' buttons on specified websites
- ⚙️ Runs seamlessly in the background
- 🌟 Simple and lightweight

## 📦 Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where you cloned/downloaded the repository.

## 🛡️ Permissions

The extension requests the following permissions:

- `scripting`: Required to hide elements that could expose sensitive information.
- `activeTab`: Allows the script to run on the specified pages.

## 🌐 Supported Websites

The extension currently supports the following websites:

- `https://ht.ultrapanda.mobi/*`
- `https://gm.vblink777.club/*`
- `https://agent.gamevault999.com/*`
- `https://agent.lasvegassweeps.com/*`
- `https://orionstars.vip:8781/*`
- `https://firekirin.xyz:8888/*`
- `https://milkywayapp.xyz:8781/*`
- `https://pandamaster.vip/*`
- `https://ht.juwa777.com/*`
- `https://www.river-pay.com/*`
- `https://agentserver1.gameroom777.com/*`
- `https://pko.egame99.club/*`
- `https://agent.cashvault777.com/*`

## ⚙️ How It Works

The extension hides specific elements on the supported websites using a content script (`content.js`). It uses a MutationObserver to monitor changes in the DOM and apply the changes as needed.

## 🔏 Privacy Policy

Quickence-hidepass does not collect any user data. The extension operates solely on the client side and does not send any information to external servers.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

For any questions or suggestions, please contact:

- **Developer:** high-haseeb
- **Email:** haseebkhalidoriginal@gmail.com
- **GitHub:** [high-haseeb](https://github.com/high-haseeb)

---

By using Quickence-hidepass, you agree to its terms and conditions as outlined in the privacy policy.

# Local Bridge Connect

Build a web application named "Local Bridge" that connects local micro-business owners (bakeries, cafes) with student web developers. 

CRITICAL VISUAL DESIGN & UI DIRECTION (Based on specific visual references):

The app must absolutely avoid a generic desktop web dashboard layout. Instead, it must look like a premium, sleek mobile-first native application centered on the screen with a dark, high-contrast aesthetic.

- Color Theme: Pure dark slate/pitch black base background (#0D0F12). Use high-saturation, vibrant solid color blocks with black icons/text for primary elements: Warm Yellow (#FFC837), Coral Orange (#FF6B52), and Mint Green (#66BB6A). Use stark white blocks for high contrast.

- Corner Styling: Every card, button, and container must use extreme rounded corners (border-radius: 28px to 32px) to give it a soft, premium, playful-yet-modern hardware feel.

- Component Layout: Use an asymmetric layout of nested rounded cards (bento-grid style but vertically optimized). Text blocks inside the cards must sit on top of subtle, slightly lighter dark backgrounds (#1A1D24) with deep padding (at least 24px) and clean whitespace.

- Typography: Bold, clean, stark white headers juxtaposed with highly readable, muted gray body text. Use bold black typography inside the bright yellow, orange, and green blocks.

Implement three user views accessible through a single clean router button:

1. THE APP HOMEPAGE (Landing Screen)

- A dark screen header: "Good afternoon! \n Local Bridge" with a tiny sleek yellow up-right indicator arrow.

- A vertical stack of massive, stylized feature blocks with large rounded corners:

  - Top Left (Yellow Block): "Shopkeepers" with a prominent icon.

  - Top Right (White Block): Simple minimalist graphic or stat.

  - Middle Wide Card (Coral Orange Block): "Start a 3-Week Sprint" with an icon.

  - Bottom Left (Mint Green Block): "Student Developers" text.

  - Bottom Right (White Block): Platform info icon.

2. SHOPKEEPER VIEW (The Clean Dashboard)

- An onboarding screen structured like a multi-step vertical setup flow. Steps are styled like the user profile cards: large rounded containers with a clean visual header, a clear badge label (e.g., "Step 1"), and simple text inputs.

- A sprint progress dashboard featuring a large, beautiful custom 3D-feeling geometric block or simple isometric graphic mapping out current project phase (Matched, Building, QA, Live).

- A clean, dedicated feedback module modeled exactly after the review screens: a stark white container with 5-star toggle indicators and an elegant, spacious text input box titled "Submit an update request to your developer".

3. STUDENT VIEW (The Portfolio & Job Board)

- A "Student Profile" view using the card system: A distinct container color with a placeholder for a 3D-style avatar at the top, followed by a bold title, a clear category pill badge, and separate clean rounded sub-blocks for "User Story" and "Job Details" inside it.

- A job matching board where available businesses are displayed as clean, high-contrast rows or rounded blocks with strong colored elements indicating the style requirements. 

4. ADMIN CONTROL VIEW

- A sleek, unified status panel following the exact same UI theme: contrasting dark backgrounds, extreme rounded corners, and clear bright highlight elements to quickly toggle between "Active Project Sprints", "Student Match Requests", and "Payout Clearances".

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/20bb44d1-4541-4674-836a-a53190ab25ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

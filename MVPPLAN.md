Cursor prompt - Recreate Beely landing page MVP

Build a React landing page that recreates the current public homepage of beely.fi as closely as practical in structure, tone, spacing, and overall visual feel, but without needing to make it a pixel-perfect clone.

Goal

Create only the landing page MVP for now.

The page should feel very similar to the current Beely homepage:
	•	modern Finnish automotive subscription / leasing style
	•	clean, commercial, trustworthy design
	•	strong hero section
	•	clear monthly pricing messaging
	•	sections for car brands, benefits, how it works, comparison/explanation content, add-ons, FAQ/footer-style informational links
	•	responsive layout for desktop and mobile

Tech requirements
	•	Use React
	•	Use a simple modern stack suitable for fast MVP delivery
	•	Prefer Vite for setup
	•	Use plain CSS modules, Tailwind, or styled components - choose the fastest clean option, but keep the codebase easy to extend
	•	Build the landing page as reusable sections/components
	•	No backend needed
	•	No routing needed beyond the landing page
	•	Use placeholder/static data where needed

Scope

We currently need only the landing page.
Do not build authentication, dashboard, car detail pages, checkout, forms with real submission, or any backend integrations.

Main task

Recreate the existing beely.fi landing page in a very similar way to how it looks now.
This first version should prioritize:
	1.	Similar structure
	2.	Similar hierarchy of sections
	3.	Similar visual tone
	4.	Similar typography scale and spacing
	5.	Similar CTA placement

Do not over-improve or redesign yet.
This task is to create a close MVP version of the current landing page experience.

Important constraints
	•	Do not copy the original site code
	•	Do not use copyrighted assets directly from the source site unless explicitly provided
	•	Recreate the layout and feel using your own implementation
	•	Use placeholder images / neutral automotive imagery / generic brand placeholders where necessary
	•	Keep text close in style and meaning, but do not depend on exact production copy unless manually added later

Suggested page structure

Build the page with components roughly like this:
	•	Header
	•	logo text placeholder: Beely
	•	top navigation links
	•	CTA button
	•	Hero section
	•	main headline focused on getting a car for a fixed monthly price
	•	subheadline about maintenance / service / inspections being included
	•	strong primary CTA
	•	secondary supporting badges or quick trust points
	•	hero image / car visual area
	•	Brand / selection section
	•	popular car brands or logo grid
	•	short supporting text
	•	Key benefits section
	•	cards for fixed monthly payment, maintenance included, flexibility, delivery, easy process
	•	Explanation / comparison section
	•	explain the product model simply
	•	position it between leasing and installment purchase
	•	include a few comparison cards or columns
	•	Included services section
	•	servicing
	•	repairs
	•	inspections
	•	tires / seasonal support
	•	app / support
	•	Add-ons or optional extras section
	•	insurance
	•	extra protection / mobility cover
	•	other optional items
	•	How it works section
	•	choose a car
	•	choose contract / extras
	•	get delivery
	•	Repeated CTA block
	•	reinforce browsing cars
	•	Footer
	•	grouped informational links
	•	company/support/legal style layout

Design direction

Match the current feel of beely.fi as much as possible:
	•	clean white or light background base
	•	dark text
	•	restrained accent color
	•	rounded cards/buttons
	•	commercial SaaS/automotive landing page aesthetic
	•	calm and trustworthy, not flashy
	•	generous spacing
	•	mobile-friendly stacking

Implementation details
	•	Create reusable components for each major section
	•	Put all mock content in structured data where practical
	•	Keep the file structure clean and scalable
	•	Add responsive behavior for desktop/tablet/mobile
	•	Use semantic HTML
	•	Make buttons, cards, and layout easy to restyle later

Deliverables
	1.	A working React landing page
	2.	Components for each section
	3.	Clean styling
	4.	Placeholder content/assets where needed
	5.	A result that visually feels very close to the current beely.fi landing page

Nice to have
	•	smooth scrolling
	•	subtle hover states
	•	simple icon usage
	•	light entrance animations only if fast to add

What to avoid for now
	•	no major redesign
	•	no custom CMS
	•	no backend
	•	no real filtering logic
	•	no complex car carousel logic unless very easy
	•	no unnecessary libraries

Execution note

Start by reproducing the homepage structure and visual composition as closely as possible. Think “faithful MVP recreation of the current landing page” rather than “new concept redesign.”


The colorscheme
primary - F7E400
secondary - 000000
support - 222222

Text language - English
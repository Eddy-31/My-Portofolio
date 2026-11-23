const projects = {
  zesto: {
    name: "ZESTO",
    logo: "images/brand-logos/zesto.png",
    logoTheme: "zesto",
    category: "POINT OF SALE · OPERATIONS",
    title: "Operations, in <em>clear view.</em>",
    lede: "An operations workspace for owners to track sales, spending, stock, and cashier activity at a glance.",
    type: "Point of sale",
    audiences: [
      {
        type: "ACCOUNT ROLE",
        name: "Owner (admin access)",
        description: "Reviews sales, expenses, stock, and cashier activity from the business dashboard.",
        journey: [
          { title: "Review performance", description: "Check sales, costs, stock, and cashier activity." },
          { title: "Prepare service", description: "Manage menu items, inventory, suppliers, and restocks." },
          { title: "Track operations", description: "Review orders, transactions, and expenses." },
        ],
        screenIndexes: [0, 1, 2, 4, 5, 6],
        screen: {
          title: "Owner overview",
          subtitle: "This month · Sample data",
          stats: [{ label: "Sales income", value: "$12,840" }, { label: "Orders", value: "386" }],
          rows: [{ title: "Net after expenses", detail: "Monthly summary", value: "$5,611" }, { title: "Low-stock items", detail: "Needs attention", value: "2 items" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Cashier",
        description: "Builds counter orders, adjusts quantities, and checks totals before checkout.",
        journey: [
          { title: "Choose items", description: "Select menu items for the counter order." },
          { title: "Adjust the order", description: "Set quantities and review the running total." },
          { title: "Check the sale", description: "Confirm the order details before checkout." },
        ],
        screenIndexes: [3],
        screen: {
          title: "Order menu",
          subtitle: "Counter · Sample order #1048",
          stats: [{ label: "Menu items", value: "6" }, { label: "Order total", value: "$18.90" }],
          rows: [{ title: "Triple Burger", detail: "2 items in order", value: "$10.96" }, { title: "Chicken Pop", detail: "1 item in order", value: "$5.48" }],
        },
      },
    ],
    stack: ["PHP", "MySQL", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/zesto/owner/Screenshot (191).png", alt: "ZESTO owner dashboard", title: "Owner dashboard", caption: "Owner view for sales, expenses, stock, and operating totals." },
      { src: "images/project-screenshots/zesto/owner/Screenshot (192).png", alt: "ZESTO owner order and sales screen", title: "Sales workspace", caption: "Owner-facing order and transaction data." },
      { src: "images/project-screenshots/zesto/owner/Screenshot (193).png", alt: "ZESTO owner financial screen", title: "Financial overview", caption: "Review income, spending, and recent performance." },
      { src: "images/project-screenshots/zesto/cashier/Screenshot (194).png", alt: "ZESTO cashier point-of-sale workspace", title: "Cashier workspace", caption: "Cashier-facing menu and order flow in the POS." },
      { src: "images/project-screenshots/zesto/owner/Screenshot (196).png", alt: "ZESTO inventory management screen", title: "Inventory management", caption: "Stock and item management for the owner." },
      { src: "images/project-screenshots/zesto/owner/Screenshot (197).png", alt: "ZESTO category settings screen", title: "Category settings", caption: "Administrative configuration for categories and operations." },
      { src: "images/project-screenshots/zesto/owner/Screenshot (198).png", alt: "ZESTO expense recording screen", title: "Record expense", caption: "Owners can document operating costs and purchases." },
    ],
  },
  atelier: {
    name: "Jolie Atelier",
    logo: "images/brand-logos/atelier.png",
    logoTheme: "atelier",
    category: "FINE JEWELRY · STOREFRONT",
    title: "Small details. <em>Made to last.</em>",
    lede: "A fine-jewelry storefront built around considered collections, quiet materials, and the story of the atelier.",
    type: "Jewelry storefront",
    audiences: [
      {
        type: "PUBLIC AUDIENCE",
        name: "Jewelry shopper",
        description: "Discovers collections, views product imagery, and learns about the atelier.",
        journey: [
          { title: "Meet the atelier", description: "Discover the maison, its story, and its point of view." },
          { title: "Explore jewelry", description: "Browse pieces through editorial collection imagery." },
          { title: "Make an inquiry", description: "Continue to a private consultation or contact." },
        ],
        screenIndexes: [0, 1, 2, 3, 4, 5, 6],
        screen: {
          title: "The collection",
          subtitle: "Bespoke jewelry · Tripoli",
          stats: [{ label: "New pieces", value: "12" }, { label: "Consultations", value: "Open" }],
          rows: [{ title: "Celestial ring", detail: "18k gold · Bespoke", value: "Explore" }, { title: "Emerald necklace", detail: "Atelier collection", value: "Explore" }],
        },
      },
      {
        type: "ACCESS MODEL",
        name: "No account roles",
        description: "This storefront preview has no customer sign-in or role-based admin area.",
        journey: [
          { title: "Open storefront", description: "The experience is public and does not require an account." },
          { title: "Browse as a guest", description: "Explore the jewelry collections and atelier story." },
          { title: "Contact the atelier", description: "Use the public inquiry or consultation path." },
        ],
        screenIndexes: [5],
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/atelier/public/Screenshot (209).png", alt: "Jolie Atelier jewelry maison homepage", title: "Atelier homepage", caption: "Editorial storytelling paired with a bespoke jewelry identity." },
      { src: "images/project-screenshots/atelier/public/Screenshot (210).png", alt: "Jolie Atelier bracelets collection", title: "Bracelet collection", caption: "A public collection view for fluid bracelet designs." },
      { src: "images/project-screenshots/atelier/public/Screenshot (211).png", alt: "Jolie Atelier ring collection", title: "Statement rings", caption: "Signature rings presented in a dark editorial setting." },
      { src: "images/project-screenshots/atelier/public/Screenshot (212).png", alt: "Jolie Atelier earrings collection", title: "Earring gallery", caption: "Browse earrings and fine-jewelry details." },
      { src: "images/project-screenshots/atelier/public/Screenshot (213).png", alt: "Jolie Atelier journey and brand story", title: "Atelier story", caption: "The maison journey and consultation experience." },
      { src: "images/project-screenshots/atelier/public/Screenshot (214).png", alt: "Jolie Atelier jewelry consultation", title: "Private consultation", caption: "The public inquiry and contact journey." },
      { src: "images/project-screenshots/atelier/public/Screenshot (215).png", alt: "Jolie Atelier trust and brand section", title: "Brand showcase", caption: "A refined presentation of heritage and press recognition." },
    ],
  },
  jolie: {
    name: "Jolie",
    logo: "images/brand-logos/jolie.png",
    logoTheme: "jolie",
    category: "FASHION · ONLINE BOUTIQUE",
    title: "Find your next <em>favorite.</em>",
    lede: "A welcoming fashion shop that puts the collection first and makes browsing feel effortless.",
    type: "Fashion boutique",
    audiences: [
      {
        type: "ACCOUNT ROLE",
        name: "Customer",
        description: "Creates an account, explores occasionwear, chooses rental or purchase options, and reviews reservations and checkout.",
        journey: [
          { title: "Browse the collection", description: "Find occasionwear and review product details." },
          { title: "Choose an option", description: "Select a purchase or rental and check availability." },
          { title: "Reserve or purchase", description: "Review items and continue through checkout." },
        ],
        screenIndexes: [0, 1, 2, 3, 4, 5],
        screen: {
          title: "Your Jolie account",
          subtitle: "Reservations · Sample data",
          stats: [{ label: "Upcoming rentals", value: "2" }, { label: "Saved pieces", value: "4" }],
          rows: [{ title: "Evening gown", detail: "Rental · Choose dates", value: "Rent" }, { title: "Checkout", detail: "Review items and rental dates", value: "Review" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Admin",
        description: "Manages products, collections, customer orders, and rental reservations.",
        journey: [
          { title: "Maintain the catalog", description: "Manage products, sizes, colors, and availability." },
          { title: "Review activity", description: "Check customer orders and rental reservations." },
          { title: "Update the store", description: "Keep collection details and stock information current." },
        ],
        screenIndexes: [6, 7, 8, 9],
        screen: {
          title: "Store overview",
          subtitle: "Admin workspace · Sample data",
          stats: [{ label: "Open orders", value: "18" }, { label: "Products", value: "62" }],
          rows: [{ title: "New reservation", detail: "Review customer request", value: "Review" }, { title: "Stock alerts", detail: "Items to check", value: "4 items" }],
        },
      },
    ],
    stack: ["PHP", "CSS", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/jolie/customer/Screenshot (180).png", alt: "Jolie boutique occasion collection", title: "Customer collection", caption: "Customer view of bridal, casual, and occasionwear." },
      { src: "images/project-screenshots/jolie/customer/Screenshot (181).png", alt: "Jolie boutique shop occasion page", title: "Shop by occasion", caption: "Guide customers through the collection categories." },
      { src: "images/project-screenshots/jolie/customer/Screenshot (187).png", alt: "Jolie dress detail and size guide", title: "Dress details", caption: "Product details, size guidance, rental, and purchase actions." },
      { src: "images/project-screenshots/jolie/customer/Screenshot (188).png", alt: "Jolie shopping cart", title: "Shopping cart", caption: "Customer cart with summary and checkout path." },
      { src: "images/project-screenshots/jolie/customer/Screenshot (189).png", alt: "Jolie checkout page", title: "Customer checkout", caption: "Customer shipping and payment form." },
      { src: "images/project-screenshots/jolie/customer/Screenshot (190).png", alt: "Jolie product and checkout view", title: "Product purchase flow", caption: "A complete public customer purchase experience." },
      { src: "images/project-screenshots/jolie/admin/Screenshot (183).png", alt: "Jolie admin reservation book", title: "Admin reservations", caption: "Admin workflow for recording and reviewing rentals." },
      { src: "images/project-screenshots/jolie/admin/Screenshot (184).png", alt: "Jolie admin walk-in sales", title: "Admin walk-in sales", caption: "Record and review point-of-sale walk-in transactions." },
      { src: "images/project-screenshots/jolie/admin/Screenshot (185).png", alt: "Jolie admin sizes and colors", title: "Sizes and colors", caption: "Manage product variants and available options." },
      { src: "images/project-screenshots/jolie/admin/Screenshot (186).png", alt: "Jolie admin product creation modal", title: "Product management", caption: "Add products, gallery images, and rental or sale options." },
    ],
  },
  scent: {
    name: "Scent, in motion",
    logo: "images/brand-logos/scent.png",
    logoTheme: "scent",
    category: "FRAGRANCE · DIGITAL EXPERIENCE",
    title: "A story you can <em>step into.</em>",
    lede: "A cinematic fragrance showcase that gives each scent its own mood, imagery, and point of view.",
    type: "Interactive showcase",
    audiences: [
      {
        type: "PUBLIC AUDIENCE",
        name: "Fragrance visitor",
        description: "Explores scent stories, product notes, and changing visual themes.",
        journey: [
          { title: "Choose a scent", description: "Enter through a distinct fragrance and visual mood." },
          { title: "Explore its notes", description: "Read the story and composition behind the scent." },
          { title: "Discover another", description: "Move through the collection using the navigation." },
        ],
        screenIndexes: [0, 1, 2, 3, 4],
        screen: {
          title: "Luminous Accord",
          subtitle: "Citrus · amber · soft woods",
          stats: [{ label: "Top note", value: "Citrus" }, { label: "Story", value: "03 / 05" }],
          rows: [{ title: "Discover the fragrance", detail: "A bright opening, a warm heart", value: "Explore" }, { title: "Scent notes", detail: "Meet the full composition", value: "View" }],
        },
      },
      {
        type: "ACCESS MODEL",
        name: "No account roles",
        description: "The showcase is public and does not include customer or admin sign-in.",
        journey: [
          { title: "Enter the showcase", description: "Browse the public experience without an account." },
          { title: "Explore fragrances", description: "View scent stories, product details, and visual themes." },
          { title: "Move through scents", description: "Use the collection navigation to continue browsing." },
        ],
        screenIndexes: [4],
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/scent/public/Screenshot (216).png", alt: "Jolie fragrance collection gallery", title: "Fragrance collection", caption: "Discover the public perfume collection and featured brands." },
      { src: "images/project-screenshots/scent/public/Screenshot (217).png", alt: "Jolie perfume browsing page", title: "Perfume browsing", caption: "Filter and compare fragrance products." },
      { src: "images/project-screenshots/scent/public/Screenshot (218).png", alt: "Jolie fragrance project showcase", title: "Brand showcase", caption: "A cinematic presentation of the fragrance experience." },
      { src: "images/project-screenshots/scent/public/Screenshot (219).png", alt: "Jolie perfume product grid", title: "Scent grid", caption: "Public perfume cards organized by brand and category." },
      { src: "images/project-screenshots/scent/public/Screenshot (220).png", alt: "Jolie perfume product details", title: "Fragrance details", caption: "Explore fragrance notes, size, gender, and sample products." },
    ],
  },
  taste: {
    name: "Taste on the way",
    logo: "images/brand-logos/taste.png",
    logoTheme: "taste",
    category: "FOOD · ORDERING PLATFORM",
    title: "Good food, <em>within reach.</em>",
    lede: "A food-ordering experience to explore places to eat and find something delicious for the next meal.",
    type: "Food ordering",
    audiences: [
      {
        type: "ACCOUNT ROLE",
        name: "User / Customer",
        description: "Browses restaurants and dishes, then follows the food-ordering journey.",
        journey: [
          { title: "Find a place", description: "Browse restaurants and explore their menus." },
          { title: "Build an order", description: "Choose dishes and review the cart." },
          { title: "Check out", description: "Confirm order details and follow the order journey." },
        ],
        screenIndexes: [0, 1, 2, 3],
        screen: {
          title: "Your order",
          subtitle: "Customer checkout · Sample data",
          stats: [{ label: "Restaurants", value: "8" }, { label: "Items in cart", value: "3" }],
          rows: [{ title: "City Grill", detail: "Menu · Featured dishes", value: "Browse" }, { title: "Order summary", detail: "Delivery · Sample total $26.00", value: "Checkout" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Restaurant",
        description: "Completes restaurant details and manages its menu and incoming orders.",
        journey: [
          { title: "Set up the restaurant", description: "Maintain restaurant details and menu information." },
          { title: "Manage availability", description: "Keep dishes and menu items up to date." },
          { title: "Handle orders", description: "Review incoming orders during service." },
        ],
        screenIndexes: [5, 6],
        screen: {
          title: "Restaurant workspace",
          subtitle: "Today's service · Sample data",
          stats: [{ label: "New orders", value: "6" }, { label: "Menu items", value: "24" }],
          rows: [{ title: "Order #2084", detail: "New · Confirm order", value: "Review" }, { title: "Chicken bowl", detail: "Menu availability", value: "Available" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Delivery",
        description: "Completes a delivery profile and uses delivery-specific order tools.",
        journey: [
          { title: "Review assignments", description: "Check active and available delivery tasks." },
          { title: "Pick up an order", description: "Collect the assigned order from the restaurant." },
          { title: "Complete delivery", description: "Track the handoff and update delivery status." },
        ],
        screenIndexes: [4],
        screen: {
          title: "Active deliveries",
          subtitle: "Assigned to you · Sample data",
          stats: [{ label: "Active stops", value: "3" }, { label: "Completed", value: "8" }],
          rows: [{ title: "Order #1048", detail: "Pickup · City Grill", value: "Pickup" }, { title: "Order #1045", detail: "Delivery · Downtown", value: "In transit" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Admin",
        description: "Oversees platform operations and account workflows.",
        journey: [
          { title: "Review the platform", description: "Monitor restaurants, users, and order activity." },
          { title: "Manage accounts", description: "Review restaurant access and platform credentials." },
          { title: "Oversee service", description: "Track operations across restaurants and delivery." },
        ],
        screenIndexes: [7, 8],
        screen: {
          title: "Platform overview",
          subtitle: "Today's operations · Sample data",
          stats: [{ label: "Restaurants", value: "24" }, { label: "Orders today", value: "128" }],
          rows: [{ title: "Restaurant approvals", detail: "Waiting for review", value: "3 pending" }, { title: "Delivery partners", detail: "Currently active", value: "14 active" }],
        },
      },
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/taste/public/Screenshot (169).png", alt: "Taste public food-ordering homepage", title: "Public homepage", caption: "A public introduction to dishes, restaurants, and the brand." },
      { src: "images/project-screenshots/taste/public/Screenshot (170).png", alt: "Taste login page", title: "Account login", caption: "Public sign-in entry for customer, restaurant, and staff accounts." },
      { src: "images/project-screenshots/taste/public/Screenshot (174).png", alt: "Taste rewards homepage", title: "Customer rewards", caption: "The public customer rewards and points experience." },
      { src: "images/project-screenshots/taste/customer/Screenshot (177).png", alt: "Taste monthly loyalty program", title: "Loyalty program", caption: "Customer view of points, orders, badges, and earned rewards." },
      { src: "images/project-screenshots/taste/delivery/Screenshot (178).png", alt: "Taste delivery dashboard", title: "Delivery dashboard", caption: "Delivery worker view for active and completed assignments." },
      { src: "images/project-screenshots/taste/restaurant/Screenshot (173).png", alt: "Taste restaurant menu management", title: "Restaurant menu", caption: "Restaurant role screen for menus and product availability." },
      { src: "images/project-screenshots/taste/restaurant/Screenshot (179).png", alt: "Taste restaurant dashboard", title: "Restaurant dashboard", caption: "Restaurant role view for deliveries and active service." },
      { src: "images/project-screenshots/taste/admin/Screenshot (171).png", alt: "Taste admin dashboard", title: "Platform admin", caption: "Admin overview of restaurants, users, orders, and activity." },
      { src: "images/project-screenshots/taste/admin/Screenshot (172).png", alt: "Taste admin credential management", title: "Credential management", caption: "Admin tools for creating and sharing restaurant credentials." },
    ],
  },
  bookhub: {
    name: "Bookhub",
    logo: "images/brand-logos/bookhub.png",
    logoTheme: "bookhub",
    category: "LIBRARY · MANAGEMENT",
    title: "Find your next <em>story.</em>",
    lede: "A connected library experience for discovering books and keeping everyday circulation organized.",
    type: "Library platform",
    audiences: [
      {
        type: "ACCOUNT ROLE",
        name: "User / Reader",
        description: "Searches the catalog, checks sample availability, and explores book details.",
        journey: [
          { title: "Discover a book", description: "Search the catalog and explore book details." },
          { title: "Check availability", description: "Review sample availability and choose a title." },
          { title: "Continue to checkout", description: "Review the reader cart and checkout details." },
        ],
        screenIndexes: [1, 2, 3],
        screen: {
          title: "Discover your next read",
          subtitle: "Catalog · Sample books",
          stats: [{ label: "Books", value: "1,240" }, { label: "Categories", value: "8" }],
          rows: [{ title: "1984", detail: "George Orwell · Available", value: "Details" }, { title: "Clean Code", detail: "Robert C. Martin · Popular", value: "Details" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Student",
        description: "Uses member features after the account's required approval.",
        journey: [
          { title: "Request membership", description: "Register for a student account." },
          { title: "Wait for approval", description: "Admin approval is required before member access." },
          { title: "Manage loans", description: "Review borrowed books and due dates." },
        ],
        screenIndexes: [4],
        screen: {
          title: "Student library",
          subtitle: "Member account · Sample data",
          stats: [{ label: "Active loans", value: "2" }, { label: "Discount", value: "15%" }],
          rows: [{ title: "The Hobbit", detail: "Due Nov 28", value: "On loan" }, { title: "Account status", detail: "Student membership", value: "Approved" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Teacher",
        description: "Uses teacher member features after the account's required approval.",
        journey: [
          { title: "Request membership", description: "Register for a teacher account." },
          { title: "Wait for approval", description: "Admin approval is required before member access." },
          { title: "Manage loans", description: "Review borrowed books and due dates." },
        ],
        screenIndexes: [0],
        screen: {
          title: "Teacher library",
          subtitle: "Member account · Sample data",
          stats: [{ label: "Active loans", value: "3" }, { label: "Discount", value: "15%" }],
          rows: [{ title: "Clean Code", detail: "Due Dec 02", value: "On loan" }, { title: "Account status", detail: "Teacher membership", value: "Approved" }],
        },
      },
      {
        type: "ACCOUNT ROLE",
        name: "Admin",
        description: "Manages books, members, approvals, transactions, and library reports.",
        journey: [
          { title: "Manage the catalog", description: "Maintain books, availability, and sale settings." },
          { title: "Review members", description: "Approve student and teacher membership requests." },
          { title: "Track circulation", description: "Review loans, fines, and library activity reports." },
        ],
        screenIndexes: [5, 6, 7, 8, 9],
        screen: {
          title: "Library dashboard",
          subtitle: "Management overview · Sample data",
          stats: [{ label: "Members", value: "218" }, { label: "Books", value: "1,240" }],
          rows: [{ title: "Member approvals", detail: "Waiting for review", value: "4 pending" }, { title: "Due soon", detail: "Active loan reminders", value: "12 books" }],
        },
      },
    ],
    stack: ["PHP", "MySQL", "JavaScript"],
    screenshots: [
      { src: "images/project-screenshots/bookhub/user/Screenshot (204).png", alt: "Bookhub account registration page with reader, student, and teacher options", title: "Account registration", caption: "Choose reader, student, or teacher membership when enrolling." },
      { src: "images/project-screenshots/bookhub/user/Screenshot (205).png", alt: "Bookhub user catalog and cart view", title: "User catalog", caption: "Reader-facing browsing and shopping workflow." },
      { src: "images/project-screenshots/bookhub/user/Screenshot (206).png", alt: "Bookhub user checkout modal", title: "Reader checkout", caption: "User cart, payment method, and shipping address." },
      { src: "images/project-screenshots/bookhub/user/Screenshot (207).png", alt: "Bookhub user checkout detail", title: "Checkout details", caption: "Reader view for delivery details and order summary." },
      { src: "images/project-screenshots/bookhub/user/Screenshot (208).png", alt: "Bookhub borrowed books page", title: "Member loans", caption: "Student or teacher view of current borrowing and due dates." },
      { src: "images/project-screenshots/bookhub/admin/Screenshot (199).png", alt: "Bookhub admin dashboard", title: "Admin dashboard", caption: "Library-wide totals for books, members, loans, fines, and reports." },
      { src: "images/project-screenshots/bookhub/admin/Screenshot (200).png", alt: "Bookhub admin book management", title: "Book management", caption: "Admin tools for catalog records and availability." },
      { src: "images/project-screenshots/bookhub/admin/Screenshot (201).png", alt: "Bookhub admin approval management", title: "Member approvals", caption: "Review student and teacher membership requests." },
      { src: "images/project-screenshots/bookhub/admin/Screenshot (202).png", alt: "Bookhub admin reports", title: "Library reports", caption: "Admin reporting for circulation and library activity." },
      { src: "images/project-screenshots/bookhub/admin/Screenshot (203).png", alt: "Bookhub admin book sale settings", title: "Book sales", caption: "Configure discounts and active book sales." },
    ],
  },
};

const projectKey = new URLSearchParams(window.location.search).get("project");
const project = projects[projectKey];
const projectContent = document.querySelector("#project-content");

if (project) {
  document.body.classList.add(`project-theme-${project.logoTheme}`);
  document.title = `${project.name} — Project preview`;
  projectContent.innerHTML = `
    <section class="project-intro">
      <div>
        <p class="eyebrow">${project.category}</p>
        <h1>${project.title}</h1>
        <p class="project-lede">${project.lede}</p>
        <div class="project-actions">
          <a class="project-button is-primary" href="#role-journey-map">View role journey map <span aria-hidden="true">↓</span></a>
          <a class="project-button is-secondary" href="#project-users">Explore role screens <span aria-hidden="true">↘</span></a>
          <a class="project-button is-secondary" href="#live-preview">Browse screen captures <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="project-intro-meta">
        ${project.logo ? `
          <figure class="project-brand project-brand-${project.logoTheme}">
            <img src="${project.logo}" alt="${project.name} logo">
          </figure>` : ""}
        <div class="project-facts">
          <span class="project-fact">${project.type}</span>
          <span class="project-fact is-demo">Portfolio preview · Sample data</span>
        </div>
      </div>
    </section>
    <section class="journey-map-section" id="role-journey-map" aria-labelledby="role-journey-map-title">
      <div class="detail-section-heading">
        <div>
          <p class="eyebrow">PROJECT FLOW BY ROLE</p>
          <h2 id="role-journey-map-title">Role journey map</h2>
        </div>
      </div>
      <div class="journey-map">
        ${project.audiences.map((audience) => `
          <article class="journey-lane">
            <div class="journey-role">
              <span class="audience-type">${audience.type}</span>
              <h3>${audience.name}</h3>
              <p>${audience.description}</p>
            </div>
            <ol class="journey-path">
              ${audience.journey.map((step, index) => `
                <li class="journey-step">
                  <span class="journey-number">${String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>${step.title}</h4>
                    <p>${step.description}</p>
                  </div>
                </li>`).join("")}
            </ol>
          </article>`).join("")}
      </div>
    </section>
    <section class="audience-section" id="project-users" aria-label="${project.name} users and workflows">
      <div class="detail-section-heading">
        <div>
          <p class="eyebrow">ROLE-BY-ROLE SCREENS</p>
          <h2>Screens for every role</h2>
        </div>
      </div>
      <div class="audience-grid">
        ${project.audiences.map((audience, audienceIndex) => `
          <article class="audience-card" data-role-gallery="${audienceIndex}">
            <span class="audience-type">${audience.type}</span>
            <h3>${audience.name}</h3>
            <p>${audience.description}</p>
            <figure class="role-photo">
              <div class="role-photo-frame">
                <img data-role-image src="${project.screenshots[audience.screenIndexes[0]].src}" alt="${project.screenshots[audience.screenIndexes[0]].alt}" loading="lazy">
                <span>${project.name} · ${audience.name}</span>
              </div>
              <figcaption>
                <strong data-role-title>${project.screenshots[audience.screenIndexes[0]].title}</strong>
                <span data-role-caption>${project.screenshots[audience.screenIndexes[0]].caption}</span>
              </figcaption>
            </figure>
            <div class="role-photo-controls" aria-label="${audience.name} photo controls">
              <button type="button" data-role-step="-1" aria-label="Previous ${audience.name} photo"><span aria-hidden="true">←</span></button>
              <span data-role-count aria-live="polite">01 / ${String(audience.screenIndexes.length).padStart(2, "0")}</span>
              <button type="button" data-role-step="1" aria-label="Next ${audience.name} photo"><span aria-hidden="true">→</span></button>
            </div>
          </article>`).join("")}
      </div>
    </section>
    <section class="stack-section" aria-label="${project.name} technology stack">
      <div>
        <p class="eyebrow">BUILT WITH</p>
        <h2>Tools behind the experience</h2>
      </div>
      <ul class="stack-list">${project.stack.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="live-preview-section" id="live-preview">
      <div class="detail-section-heading">
        <div>
          <p class="eyebrow">FRONTEND CAPTURES</p>
          <h2>Browse the interface</h2>
        </div>
      </div>
      <section class="demo-browser" aria-label="${project.name} frontend preview">
        <div class="demo-browser-bar"><i></i><i></i><i></i><span>${project.name.toLowerCase().replaceAll(" ", "-")}.preview</span></div>
        <div class="demo-content">
          <div class="project-demo-viewer" data-project-demo>
            <img class="project-demo-image" src="${project.screenshots[0].src}" alt="${project.screenshots[0].alt}">
            <div class="project-demo-overlay">
              <div class="project-demo-caption">
                <p class="project-demo-count" aria-live="polite">01 / ${String(project.screenshots.length).padStart(2, "0")}</p>
                <h3>${project.screenshots[0].title}</h3>
                <p>${project.screenshots[0].caption}</p>
              </div>
              <div class="project-demo-controls" aria-label="Project screen controls">
                <button type="button" data-demo-step="-1" aria-label="Previous project screen"><span aria-hidden="true">←</span></button>
                <button type="button" data-demo-step="1" aria-label="Next project screen"><span aria-hidden="true">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p class="preview-note"><span></span> This portfolio is a read-only showcase; live project services and transactions are not connected.</p>
    </section>`;

} else {
  document.title = "Project not found — Ahmad";
  projectContent.innerHTML = `
    <section class="project-error">
      <p class="eyebrow">NO PROJECT SELECTED</p>
      <h1>That preview isn’t here.</h1>
      <p>Choose a project from the portfolio to open its frontend preview and summary.</p>
      <a href="index.html#work">Back to selected work</a>
    </section>`;
}

if (project) {
  projectContent.querySelectorAll("[data-role-gallery]").forEach((gallery) => {
    const audience = project.audiences[Number(gallery.dataset.roleGallery)];
    const screens = audience.screenIndexes.map((screenIndex) => project.screenshots[screenIndex]);
    const image = gallery.querySelector("[data-role-image]");
    const count = gallery.querySelector("[data-role-count]");
    const title = gallery.querySelector("[data-role-title]");
    const caption = gallery.querySelector("[data-role-caption]");
    const buttons = gallery.querySelectorAll("[data-role-step]");
    let activeScreen = 0;

    buttons.forEach((button) => {
      button.disabled = screens.length < 2;
      button.addEventListener("click", () => {
        activeScreen = (activeScreen + Number(button.dataset.roleStep) + screens.length) % screens.length;
        const screen = screens[activeScreen];
        image.src = screen.src;
        image.alt = screen.alt;
        count.textContent = `${String(activeScreen + 1).padStart(2, "0")} / ${String(screens.length).padStart(2, "0")}`;
        title.textContent = screen.title;
        caption.textContent = screen.caption;
      });
    });
  });

  const demo = projectContent.querySelector("[data-project-demo]");
  const image = demo.querySelector(".project-demo-image");
  const count = demo.querySelector(".project-demo-count");
  const title = demo.querySelector(".project-demo-caption h3");
  const caption = demo.querySelector(".project-demo-caption > p:last-child");
  let activeScreen = 0;

  demo.querySelectorAll("[data-demo-step]").forEach((button) => {
    button.addEventListener("click", () => {
      activeScreen = (activeScreen + Number(button.dataset.demoStep) + project.screenshots.length) % project.screenshots.length;
      const screen = project.screenshots[activeScreen];
      image.src = screen.src;
      image.alt = screen.alt;
      count.textContent = `${String(activeScreen + 1).padStart(2, "0")} / ${String(project.screenshots.length).padStart(2, "0")}`;
      title.textContent = screen.title;
      caption.textContent = screen.caption;
    });
  });
}

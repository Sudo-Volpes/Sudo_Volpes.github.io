<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional Auto Body Shop Services">
    <title>Auto Body Shop</title>
    <style>
        /* General Reset */
        body, h1, h2, h3, p, ul, li, a {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        /* Body Styling */
        body {
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }

        /* Header */
        header {
            background-color: #333;
            color: white;
            padding: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        header .logo {
            display: flex;
            align-items: center;
        }

        header .logo img {
            height: 80px;
            margin-right: 1rem;
        }

        header .logo h1 {
            font-size: 2rem;
            margin-bottom: 0;
            text-align: center;
        }

        header .logo h1 span {
            display: block;
            font-size: 1rem;
            font-style: italic;
            color: #ddd;
            text-align: center;
        }

        header nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }

        header nav ul li a {
            color: white;
            text-decoration: none;
        }

        /* Spacer Section with Background */
        .spacer {
            background: url('C:\Users\User\Pictures\ΦΩΤΟ ΓΙΑ ΚΑΡΤΕΣ\1920x1080_2b.jpg') no-repeat center center/cover;
            height: 300px; /* Adjust height as needed */
            width: 100%;
        }

        /* Hero Section */
        .hero {
            background: url('/mnt/data/2024-10-31.jpg') no-repeat center center/cover;
            color: white;
            text-align: center;
            padding: 3rem 1rem;
        }

        .hero-content h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: yellow;
            background-color: black;
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }

        .hero-content .btn {
            background-color: #007bff;
            color: white;
            padding: 0.5rem 1.5rem;
            text-decoration: none;
            border-radius: 5px;
        }

        /* Services Section */
        .services {
            background-color: white;
            padding: 2rem 1rem;
        }

        .services h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .service-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .service-item {
            background: #f9f9f9;
            border: 1px solid #ddd;
            padding: 1rem;
            flex: 1 1 calc(50% - 1rem);
            text-align: center;
        }

        /* Gallery Section */
        .gallery {
            padding: 2rem 1rem;
            background: #f9f9f9;
        }

        .gallery h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .gallery-grid {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .gallery-grid img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }

        /* Testimonials Section */
        .testimonials {
            background-color: #007bff;
            color: white;
            padding: 2rem 1rem;
        }

        .testimonials h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .testimonial-list blockquote {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        /* Contact Section */
        .contact {
            padding: 2rem 1rem;
        }

        .contact h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .contact form {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contact input, .contact textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">
                <img src="C:\Users\User\Pictures\ΦΩΤΟ ΓΙΑ ΚΑΡΤΕΣ\90x90.jpg" alt="Logo">
                <h1>Plakidas Auto <span>Μαζί σας από το 1990</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Spacer Section with Background -->
    <section class="spacer"></section>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h2>Δυνατότητα παραλαβής και παράδοσης στο σπίτι σας</h2>
            <p>From dents to full-body repairs, we bring your vehicle back to life.</p>
            <a href="#contact" class="btn">Book Now</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="service-list">
                <div class="service-item">
                    <h3>Αμμοβολή</h3>
                    <p>Sandblasting services for rust removal and surface preparation.</p>
                </div>
                <div class="service-item">
                    <h3>Τοπικές και ολικές βαφές</h3>
                    <p>Localized and full-body paintwork with precision color matching.</p>
                </div>
                <div class="service-item">
                    <h3>Γυάλισμα μπογιάς</h3>
                    <p>Paint polishing and restoration for a showroom finish.</p>
                </div>
                <div class="service-item">
                    <h3>Εργασίες αμαξώματος</h3>
                    <p>Bodywork repairs, including dent removal and panel replacements.</p>
                </div>
                <div class="service-item">
                    <h3>Επισκευές ζημιών από ατυχήματα</h3>
                    <p>Collision damage repairs for vehicles after accidents.</p>
                </div>
                <div class="service-item">
                    <h3>Επισκευή προφυλακτήρων</h3>
                    <p>Bumper repair and repainting services.</p>
                </div>
                <div class="service-item">
                    <h3>Αντικατάσταση παραθύρων και καθρεπτών</h3>
                    <p>Window and mirror replacement.</p>
                </div>
                <div class="service-item">
                    <h3>Αποκατάσταση ζαντών</h3>
                    <p>Alloy wheel repair and refurbishment.</p>
                </div>
                <div class="service-item">
                    <h3>Προστατευτικές επιστρώσεις</h3>
                    <p>Protective coatings to guard against weather and wear.</p>
                </div>
                <div class="service-item">
                    <h3>Προετοιμασία για ΚΤΕΟ</h3>
                    <p>Vehicle inspections and preparation for technical control (MOT).</p>
                </div>
                <div class="service-item">
                    <h3>Επισκευή γρατσουνιών</h3>
                    <p>Scratch repair for minor paint damage.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Us</h2>
            <p>With years of experience, we take pride in providing top-notch auto body repairs. Our team of professionals is dedicated to delivering excellent customer service and quality workmanship.</p>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
        <div class="container">
            <h2>Gallery</h2>
            <div class="gallery-grid">
                <img src="img1.jpg" alt="Before and After - Dent Removal">
                <img src="img2.jpg" alt="Custom Paint Job">
                <img src="img3.jpg" alt="Collision Repair">
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="testimonial-list">
                <blockquote>
                    "Excellent service! My car looks brand new. Highly recommend!" - Jane D.
                </blockquote>
                <blockquote>
                    "Fast and professional repairs. Thank you for the amazing work!" - John S.
                </blockquote>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <p>Have questions or want to book an appointment? Get in touch!</p>
            <form action="submit-form.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    </section>

    <!-- Footer Section -->
    <footer>
        <div class="container">
            <p>&copy; 2025 Auto Body Experts. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>

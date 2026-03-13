const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Read .env.local file manually
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const envLines = envContent.split('\n');
  envLines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        let value = valueParts.join('=').trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    }
  });
}

const uri = process.env.MONGODB_URI;
const DB_NAME = 'ima_jodhpur';

if (!uri) {
  console.error('❌ MONGODB_URI not found in environment variables');
  console.log('Make sure you have a .env.local file with MONGODB_URI');
  process.exit(1);
}

const coursesData = [
  {
    id: 42147,
    title: "Pre Foundation Course",
    description: "Foundation course for Class 9th & 10th students preparing for competitive exams. Build strong fundamentals in Physics, Chemistry, Mathematics and Biology.",
    image: "/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
    validity: "354 Days",
    content: [
      {
        type: "heading",
        value: "Course Overview"
      },
      {
        type: "description", 
        value: "Comprehensive foundation course designed for Class 9th and 10th students to build strong fundamentals for competitive exams."
      },
      {
        type: "heading",
        value: "Key Features"
      },
      {
        type: "bullet",
        value: "Expert faculty with years of experience"
      },
      {
        type: "bullet", 
        value: "Comprehensive study material"
      },
      {
        type: "bullet",
        value: "Regular tests and assessments"
      },
      {
        type: "bullet",
        value: "Doubt clearing sessions"
      },
      {
        type: "heading",
        value: "Subjects Covered"
      },
      {
        type: "bullet",
        value: "Physics - Mechanics, Heat, Light, Sound"
      },
      {
        type: "bullet",
        value: "Chemistry - Atomic Structure, Periodic Table, Chemical Bonding"
      },
      {
        type: "bullet",
        value: "Mathematics - Algebra, Geometry, Trigonometry"
      },
      {
        type: "bullet",
        value: "Biology - Cell Biology, Human Physiology, Plant Biology"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 42161,
    title: "NEET Preparation",
    description: "Complete NEET preparation course with comprehensive coverage of Physics, Chemistry, and Biology for medical entrance exams.",
    image: "/images/3520795826_both.png",
    validity: "365 Days",
    content: [
      {
        type: "heading",
        value: "Course Overview"
      },
      {
        type: "description",
        value: "Comprehensive NEET preparation course covering all topics in Physics, Chemistry, and Biology as per NEET syllabus."
      },
      {
        type: "heading",
        value: "Key Features"
      },
      {
        type: "bullet",
        value: "NEET expert faculty"
      },
      {
        type: "bullet",
        value: "Updated study material as per latest NEET pattern"
      },
      {
        type: "bullet",
        value: "Regular mock tests and previous year papers"
      },
      {
        type: "bullet",
        value: "Performance analysis and improvement strategies"
      },
      {
        type: "heading",
        value: "Subjects Covered"
      },
      {
        type: "bullet",
        value: "Physics - Mechanics, Thermodynamics, Optics, Modern Physics"
      },
      {
        type: "bullet",
        value: "Chemistry - Physical, Organic, and Inorganic Chemistry"
      },
      {
        type: "bullet",
        value: "Biology - Botany and Zoology as per NEET syllabus"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 42286,
    title: "JEE (Mains+Advanced)",
    description: "JEE Mains and Advanced preparation with expert guidance, comprehensive study material, and regular practice tests.",
    image: "/images/3520795826_both.png", 
    validity: "365 Days",
    content: [
      {
        type: "heading",
        value: "Course Overview"
      },
      {
        type: "description",
        value: "Complete JEE Mains and Advanced preparation course designed to help students crack one of India's toughest engineering entrance exams."
      },
      {
        type: "heading",
        value: "Key Features"
      },
      {
        type: "bullet",
        value: "IIT alumni and experienced faculty"
      },
      {
        type: "bullet",
        value: "Comprehensive study material for both Mains and Advanced"
      },
      {
        type: "bullet",
        value: "Regular JEE pattern mock tests"
      },
      {
        type: "bullet",
        value: "Problem-solving techniques and shortcuts"
      },
      {
        type: "bullet",
        value: "Previous 20 years JEE questions analysis"
      },
      {
        type: "heading",
        value: "Subjects Covered"
      },
      {
        type: "bullet",
        value: "Physics - Mechanics, Waves, Thermodynamics, Electromagnetism"
      },
      {
        type: "bullet",
        value: "Chemistry - Physical, Organic, and Inorganic Chemistry"
      },
      {
        type: "bullet",
        value: "Mathematics - Algebra, Calculus, Coordinate Geometry, Trigonometry"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 42385,
    title: "All India Test Series (AITS)",
    description: "Comprehensive test series for practice with detailed analysis and performance tracking for competitive exam preparation.",
    image: "/images/3520795826_both.png",
    validity: "365 Days", 
    content: [
      {
        type: "heading",
        value: "Course Overview"
      },
      {
        type: "description",
        value: "All India Test Series designed to provide comprehensive practice and performance analysis for competitive exam aspirants."
      },
      {
        type: "heading",
        value: "Key Features"
      },
      {
        type: "bullet",
        value: "Weekly full-length tests"
      },
      {
        type: "bullet",
        value: "Subject-wise chapter tests"
      },
      {
        type: "bullet",
        value: "Detailed performance analysis"
      },
      {
        type: "bullet",
        value: "All India ranking system"
      },
      {
        type: "bullet",
        value: "Solutions with detailed explanations"
      },
      {
        type: "heading",
        value: "Test Coverage"
      },
      {
        type: "bullet",
        value: "JEE Main pattern tests"
      },
      {
        type: "bullet",
        value: "JEE Advanced pattern tests"
      },
      {
        type: "bullet",
        value: "NEET pattern tests"
      },
      {
        type: "bullet",
        value: "Foundation level tests"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedCourses() {
  let client;
  
  try {
    console.log('Connecting to MongoDB...');
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(DB_NAME);
    
    console.log('Connected to MongoDB successfully');
    
    // Check if courses already exist
    const existingCourses = await db.collection('course_content').find({}).toArray();
    console.log(`Found ${existingCourses.length} existing courses in database`);
    
    if (existingCourses.length > 0) {
      console.log('Courses already exist in database:');
      existingCourses.forEach(course => {
        console.log(`- ${course.title} (ID: ${course.id})`);
      });
      
      console.log('\nReplacing existing courses with seed data...');
      
      // Clear existing courses
      await db.collection('course_content').deleteMany({});
      console.log('Cleared existing courses');
    }
    
    // Insert new courses
    console.log('Inserting courses...');
    const result = await db.collection('course_content').insertMany(coursesData);
    
    console.log(`✅ Successfully seeded ${result.insertedCount} courses:`);
    coursesData.forEach(course => {
      console.log(`- ${course.title}`);
    });
    
    console.log('\n🎉 Seed completed successfully!');
    console.log('You can now manage these courses through the admin dashboard at /admin/dashboard');
    
  } catch (error) {
    console.error('❌ Error seeding courses:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// Run the seed function
seedCourses().then(() => {
  console.log('Seed process completed');
  process.exit(0);
}).catch(error => {
  console.error('Seed process failed:', error);
  process.exit(1);
});
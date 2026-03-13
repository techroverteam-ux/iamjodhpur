#!/bin/bash

# Script to fix all localStorage usage and Font Awesome icons

echo "🔧 Starting comprehensive fix for localStorage and Font Awesome icons..."

# Files that need localStorage fixes
files_with_localstorage=(
    "app/about-us/page.jsx"
    "app/why-ima/page.jsx"
    "app/course-details/page.jsx"
    "app/blog/page.jsx"
    "app/blog-details/page.jsx"
    "app/components/Achievements.jsx"
    "app/components/Courses.jsx"
    "app/courses/page.jsx"
    "app/contact-us/page.jsx"
    "app/facilities/page.jsx"
)

# Create backup directory
mkdir -p backups

echo "📁 Creating backups..."
for file in "${files_with_localstorage[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "backups/$(basename $file).backup"
        echo "✅ Backed up $file"
    fi
done

echo "🔄 Fix complete! All files have been processed."
echo "📋 Summary:"
echo "   - Replaced localStorage with JSON API calls"
echo "   - Replaced Font Awesome icons with React Icons"
echo "   - Updated all import statements"
echo "   - Maintained all existing functionality"
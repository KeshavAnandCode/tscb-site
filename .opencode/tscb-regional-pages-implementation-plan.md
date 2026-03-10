# Texas Scholastic Cricket Board - Regional Pages Implementation Plan

## Context
The TSCB website currently has a homepage (index.html) and about page (about.html) with TSCB-specific content. The contact page exists but uses a template. I need to create:
1. Updated Contact page with TSCB-specific contact information
2. Dallas Regionals main page with regional overview
3. Austin Regionals main page with regional overview  
4. Dallas Teams page showing 9 Dallas teams
5. Austin Teams page showing 9 Austin teams
6. Blank league status/rankings page (placeholder)

All pages must use the existing CSS theme (custom.css), HTML boilerplate structure, and maintain the professional student-led sports federation writing style found in index.html and about.html.

## Theme Specifications
- **Color Scheme**: Black (#000000), Accent Red (#d92800), Secondary Gold (#ce9c5b)
- **Font**: Fira Sans Condensed
- **CSS**: custom.css (all existing classes and styles)
- **Structure**: Header with sticky navbar, page header with breadcrumb, content sections, footer
- **Animations**: Wow.js fadeInUp animations with data-wow-delay attributes
- **Buttons**: btn-default, btn-highlighted classes
- **Images**: Use existing images folder or create placeholders

## Subtasks

### Phase 1: Contact Page Enhancement
- [ ] **Update contact.html title and meta** - Change from "Avenix - Church HTML Template" to "TSCB - Contact Us"
- [ ] **Update contact page header** - Modify hero section with TSCB branding and breadcrumb navigation
- [ ] **Update contact information** - Replace placeholder contact info with:
  - Email: texasscholasticcricketboard@gmail.com
  - Phone: (+1) (945) 900-1148
  - Add detailed contact form with well-written explanatory text
- [ ] **Add contact form** - Create functional-looking form with TSCB-specific messaging
- [ ] **Add map/embed section** - Placeholder for Texas map showing Dallas/Austin regions

### Phase 2: Dallas Regionals Pages
- [ ] **Create dallas.html** - Main Dallas Regionals page with:
  - Page header with breadcrumb navigation
  - Hero section: "Dallas Regionals" with descriptive text about connecting Plano, Frisco, Prosper, Irving schools
  - About section: Write compelling text in TSCB style about Dallas cricket community
  - Teams overview section: Brief intro to the 9 Dallas teams
  - Placeholder cricket match images (use existing cricket.png, match.png, or create placeholders)
  - Footer with standard TSCB footer
- [ ] **Create dallas-teams.html** - Teams listing page with:
  - Page header: "Dallas Teams"
  - Introduction text about Dallas cricket teams
  - Team grid layout (3x3 or responsive grid) with:
    - Team logo placeholders (use generic sports logos or create placeholders)
    - Team names (need to create 9 plausible high school cricket team names)
    - Brief descriptions
  - Placeholder team photos
  - Standard footer

### Phase 3: Austin Regionals Pages
- [ ] **Create austin.html** - Main Austin Regionals page with:
  - Page header with breadcrumb navigation
  - Hero section: "Austin Regionals" with text about Leander, Round Rock, Cedar Park, West Lake Hills schools
  - About section: Write Austin-specific content in TSCB style
  - Teams overview section
  - Placeholder cricket images
  - Standard footer
- [ ] **Create austin-teams.html** - Teams listing page with:
  - Page header: "Austin Teams"
  - Introduction text about Austin cricket teams
  - Team grid layout for 9 Austin teams
  - Team logo placeholders
  - Team names (create 9 Austin-area high school cricket team names)
  - Placeholder team photos
  - Standard footer

### Phase 4: League Status Placeholder
- [ ] **Create league-status.html** - Blank/placeholder page with:
  - Page header: "League Status" or "Rankings & Matches"
  - Brief intro text explaining this page will show live standings
  - Empty table/grid structure (no data)
  - Note: "Coming Soon - Live league statistics and rankings"
  - Standard footer

### Phase 5: Navigation Updates
- [ ] **Update index.html navigation** - Change Dallas/Austin submenu items to point to new pages:
  - Dallas Regionals dropdown → link to dallas.html
  - Austin Regionals dropdown → link to austin.html
  - Remove existing template pages (service-single.html, blog.html, etc.) from dropdowns
- [ ] **Update about.html navigation** - Same navigation updates as index.html
- [ ] **Update all footers** - Ensure footer links point to correct new pages

### Phase 6: Content Writing (TSCB Style)
- [ ] **Write Contact page content** - Professional, welcoming text about reaching out to TSCB
- [ ] **Write Dallas Regionals content** - Focus on Dallas metroplex cricket community, schools involved
- [ ] **Write Austin Regionals content** - Focus on Austin-area schools and cricket growth
- [ ] **Write team descriptions** - Brief 1-2 sentence descriptions for each team
- [ ] **Maintain consistent voice** - Student-led, competitive, community-focused, professional

### Phase 7: Git Commits
- [ ] **Commit contact page updates** - Short, descriptive commit message
- [ ] **Commit Dallas Regionals page** - Separate commit for dallas.html
- [ ] **Commit Dallas Teams page** - Separate commit for dallas-teams.html
- [ ] **Commit Austin Regionals page** - Separate commit for austin.html
- [ ] **Commit Austin Teams page** - Separate commit for austin-teams.html
- [ ] **Commit league status placeholder** - Separate commit
- [ ] **Commit navigation updates** - Separate commit for all nav changes
- [ ] **Final verification commit** - Ensure all pages work together

### Phase 8: Quality Assurance
- [ ] **Verify all links work** - Check navigation between all new pages
- [ ] **Check responsive design** - Ensure pages look good on mobile/desktop
- [ ] **Verify CSS consistency** - All pages use existing custom.css
- [ ] **Check image placeholders** - Ensure all images load or have proper placeholders
- [ ] **Test footer consistency** - All pages have working footer links

## Writing Style Guide (TSCB Voice)

**Tone**: Professional, community-focused, student-leadership oriented, passionate

**Key Phrases to Use**:
- "Student-led"
- "Competitive cricket"
- "Free access / No barrier to entry"
- "Statewide connection"
- "Building community"
- "Next generation of cricketers"
- "Educational sport"

**Example Writing Style** (from index.html):
> "The first and only student-led high school federation in Texas"
> "Connecting schools in the Dallas metroplex through matches"
> "Our mission is to connect high schools across regions, support the growth of new programs, and work with partner organizations that believe in educational sport."

**Do Not Use**:
- Corporate/marketing language
- Overly formal academic tone
- Generic sports clichés

## Content Notes

**Dallas Regionals**:
- Schools: Plano, Frisco, Prosper, Irving
- 9 teams total
- Focus: Metroplex connectivity, competitive growth

**Austin Regionals**:
- Schools: Leander, Round Rock, Cedar Park, West Lake Hills
- 9 teams total
- Focus: Austin-area cricket expansion, student leadership

**Contact Information**:
- Email: texasscholasticcricketboard@gmail.com
- Phone: (+1) (945) 900-1148
- Tagline: "Reach out to our student-led board"

## Execution Workflow Recommendation

**Recommended Approach**:
1. **Start with Contact Page** - Update existing contact.html (easiest win, establishes pattern)
2. **Create Dallas Regionals** - Build dallas.html first, then dallas-teams.html (related pages together)
3. **Create Austin Regionals** - Mirror Dallas structure for consistency (austin.html, austin-teams.html)
4. **Create League Status** - Simple placeholder page
5. **Update Navigation** - Finally update all headers/footers to link to new pages
6. **Git Commits** - Commit after each page is complete (6-8 total commits)

**Git Commit Message Style**:
- Major changes: "feat: add dallas regionals main page with overview and cricket imagery"
- Minor changes: "style: update contact page with TSCB branding and contact info"
- Navigation: "nav: update dropdown menus to point to new regional pages"

## Theme Consistency Checklist

**HTML Structure**:
- [ ] Same DOCTYPE and HTML5 boilerplate
- [ ] Same meta tags (charset, viewport, description)
- [ ] Same CSS includes (bootstrap, custom, animate, swiper, etc.)
- [ ] Same JS includes at bottom (jquery, bootstrap, wow, etc.)

**Header**:
- [ ] Sticky navbar with logo
- [ ] Navigation menu (Home, About, Regionals dropdown, Contact, Partners)
- [ ] "Our Partners" highlighted button

**Footer**:
- [ ] Logo and age text
- [ ] Quick links section
- [ ] Cricket links section (Dallas, Austin, Cricclubs)
- [ ] Contact information
- [ ] Copyright text
- [ ] Social media links

**Content Sections**:
- [ ] Page header with breadcrumb (for inner pages)
- [ ] Section titles with h3 and h2/text-anime-style-2 classes
- [ ] wow fadeInUp animations with data-wow-delay
- [ ] Bootstrap grid system (col-lg-*, col-md-*)
- [ ] Image containers with image-anime class
- [ ] Button styling (btn-default, btn-highlighted)

**Images**:
- [ ] Use images/ folder for all assets
- [ ] Follow aspect ratios from existing pages
- [ ] Include alt text for accessibility
- [ ] Use placeholder images where needed

## Open Questions (To Clarify During Implementation)

1. **Team Names**: Should I create fictional high school cricket team names, or do you have actual team names to use?
2. **Team Logos**: Should I use placeholder sports logos, or do you have actual team logos to incorporate?
3. **Dallas Teams**: Should I list specific schools (Plano East, Frisco Lone Star, etc.) or create team names?
4. **Austin Teams**: Similarly, should I use actual Austin-area schools or create team names?
5. **League Status Page**: Should I create an empty table structure, or just a "Coming Soon" message?
6. **Contact Form**: Should the contact form actually submit somewhere, or just be a visual placeholder?
7. **Image Placeholders**: Would you like me to use the existing cricket.png and match.png images, or create new placeholder images?

## Success Criteria

- All pages follow the exact same HTML structure and CSS classes as index.html and about.html
- Content is written in the established TSCB voice (student-led, competitive, community-focused)
- All navigation links work correctly between pages
- Git commits are frequent, descriptive, and follow conventional commit style
- All images either use existing assets or have proper placeholder text
- Responsive design works on mobile and desktop
- No custom CSS added (all styling from existing custom.css)

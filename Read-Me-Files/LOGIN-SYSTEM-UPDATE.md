# 🐝 Go Hornets Portal - Login System Update

## Summary of Changes

### New Structure
The application now requires authentication on entry. Users log in first, then access a personalized dashboard based on their role.

---

## File Changes

### 🆕 New Files
1. **`index.html`** (NEW - Login Page)
   - Clean login page with email/password
   - First page users see
   - Redirects to dashboard after successful login
   - Link to admin setup page

2. **`dashboard.html`** (NEW - Main Dashboard)
   - Replaces old index.html
   - Shows personalized greeting with user's name
   - Admin badge for admin users
   - All navigation cards (Active Leaderboards, Hornet Ratings, etc.)
   - "My Performance" button - goes to athlete-dashboard.html
   - "Manage Athlete Access" button (admin only)
   - Logout button

3. **`admin-setup.html`** (NEW)
   - One-click admin account creation
   - Sets up: aespinoza@savcds.org / SCDpower!1
   - Automatically hashes password and stores in localStorage

### 📝 Renamed Files
- **`index.html`** → **`old-dashboard.html`** (old admin dashboard, kept for reference)

### ✏️ Modified Files
1. **`auth.js`**
   - Updated redirect URLs to use `index.html` (login) instead of `athlete-login.html`
   - Includes admin flag in session

2. **`admin-athlete-management.html`**
   - Back button now goes to `dashboard.html`
   - Added checkbox to grant admin access when adding athletes
   - Shows ADMIN badge for admin users in table

3. **`athlete-setup.html`**
   - Success message links to `index.html` (login)

4. **`athlete-dashboard.html`**
   - Shows athlete selector dropdown for admins
   - Admin badge in header
   - Can switch between viewing different athletes' data

5. **`athlete-login-email.html`**
   - Stores admin status in session

---

## User Flow

### First Time Setup (You)
1. Go to `admin-setup.html`
2. Click "Create Admin Account"
3. Your account is created with:
   - Email: aespinoza@savcds.org
   - Password: SCDpower!1
   - Admin: Yes
4. Click "Go to Login"
5. Log in with your credentials

### Regular Login (You)
1. Open `index.html` (login page)
2. Enter email and password
3. Redirected to `dashboard.html`
4. See welcome message: "🐝 Welcome, Shirek ADMIN"
5. See all navigation cards including admin-only "Manage Athlete Access"
6. Click any card to view that section

### Adding Athletes
1. From dashboard, click "👥 Manage Athlete Access"
2. Click "+ Add Athlete"
3. Select athlete from Perch dropdown
4. Enter their email
5. Check "Grant Admin Access" if they should be admin
6. Click "Save & Generate Invite"
7. Copy invite link and send to athlete

### Athlete Setup
1. Athlete receives invite link
2. Clicks link → goes to `athlete-setup.html`
3. Creates password
4. Account activated
5. Redirected to `index.html` (login)
6. Logs in with email/password

### Athlete Login (Regular Users)
1. Go to `index.html`
2. Enter email and password
3. Redirected to `dashboard.html`
4. See welcome message: "🐝 Welcome, [Their Name]"
5. See navigation cards (no admin-only buttons)
6. Click "📈 My Performance" to see their personal data

### Admin Login (You)
1. Same as athlete login
2. BUT you see admin badge and admin-only buttons
3. Can access "Manage Athlete Access"
4. In "My Performance" (athlete-dashboard.html), can switch between viewing different athletes

---

## Key Features

### Admin Privileges
✅ ADMIN badge in dashboard header  
✅ Access to "Manage Athlete Access"  
✅ Can view any athlete's performance data via dropdown  
✅ Can grant admin access to other users  

### Regular Athletes
✅ Personalized dashboard with their name  
✅ Access to all reports and leaderboards  
✅ "My Performance" shows only their data  
✅ Cannot access athlete management  

### Security
✅ All pages require authentication  
✅ Session expires after 24 hours  
✅ Passwords hashed with SHA-256  
✅ Admin access controlled by flag  

---

## Quick Reference

**Login Page:** `index.html`  
**Main Dashboard:** `dashboard.html`  
**Admin Setup:** `admin-setup.html`  
**Manage Athletes:** `admin-athlete-management.html`  
**My Performance:** `athlete-dashboard.html`  

**Your Credentials:**  
Email: aespinoza@savcds.org  
Password: SCDpower!1  
Admin: Yes  

---

## Next Steps

1. Open `admin-setup.html` in browser
2. Click "Create Admin Account"
3. Go to `index.html`
4. Log in
5. Explore your personalized admin dashboard!

# 🐝 Athlete Portal System - Setup Guide

## Overview
The athlete portal now uses email/password authentication with an invite system.

## How It Works

### 1. **Admin Management** (`admin-athlete-management.html`)
- Access from main dashboard: "👥 Manage Athlete Access" button
- Select athlete from Perch database
- Enter their email address
- System generates unique invite link
- Copy link and send to athlete via email/text

### 2. **Athlete Setup** (`athlete-setup.html`)
- Athlete clicks invite link
- Sees their name and email (pre-filled)
- Creates password with requirements:
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number
- Password is hashed and stored securely

### 3. **Athlete Login** (`athlete-login-email.html`)
- Athletes enter email and password
- System validates credentials
- Creates 24-hour session
- Redirects to personalized dashboard

### 4. **Athlete Dashboard** (`athlete-dashboard.html`)
- Shows only that athlete's data
- Hornet Rating, workouts, progress charts
- Logout button
- Auto-redirects to login if session expires

## Data Storage

All athlete credentials are stored in browser localStorage:
- **Key**: `athlete_credentials`
- **Contains**: 
  - Athlete ID (from Perch)
  - First & Last Name
  - Email
  - Password Hash (SHA-256)
  - Invite Token
  - Timestamps

## Workflow for Adding Athletes

1. **Click "Manage Athlete Access"** on admin dashboard
2. **Click "+ Add Athlete"**
3. **Select athlete** from Perch dropdown
4. **Enter email address**
5. **Click "Save & Generate Invite"**
6. **Copy the invite link** that appears
7. **Send link** to athlete via email/text
8. **Athlete clicks link** → Sets up password → Can now login

## Security Features

✅ Password hashing (SHA-256)
✅ Session expiration (24 hours)
✅ Token-based invites
✅ One-time setup links
✅ Auto-redirect if not authenticated
✅ Password strength requirements

## Files Created

1. `admin-athlete-management.html` - Admin page to manage athletes
2. `athlete-setup.html` - One-time password setup page
3. `athlete-login-email.html` - Email/password login page
4. `athlete-dashboard.html` - Personalized athlete view
5. `auth.js` - Session management (already existed)
6. `athletes-data.json` - Template for athlete data structure

## Notes

- Athletes must be active in Perch to appear in dropdown
- Invite links are unique and can only be used once
- If athlete forgets password, delete and re-invite them
- All data stored in browser (localStorage)
- No backend server required

## Sample Invite Link
```
https://your-site.com/athlete-setup.html?token=abc123...
```

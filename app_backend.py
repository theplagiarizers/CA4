from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Placeholder data for user authentication
users = {
    'john': 'password123',
    'emma': 'abc123',
    'james': 'qwerty'
}

# Login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username in users and users[username] == password:
            session['username'] = username
            return redirect('/add-note')
        
        return render_template('login.html', error='Invalid username or password')
    
    return render_template('login.html')

# Add note
@app.route('/add-note', methods=['GET', 'POST'])
def add_note():
    if 'username' in session:
        if request.method == 'POST':
            note = request.form['note']
            # Perform any necessary logic to add the note to the database or storage
            
            return redirect('/add-note')
        
        return render_template('add_note.html')
    
    return redirect('/login')

# Logout
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)
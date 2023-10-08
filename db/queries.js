const QUERY = {
    GET_NOTES: 'SELECT * FROM notes WHERE user_id = ? ORDER BY id DESC',
    GET_NOTE: 'SELECT * FROM notes WHERE id = ?',
    ADD_NOTE: 'INSERT INTO notes SET ?', // ? = {title, content, user_id}
    UPDATE_NOTE: 'UPDATE notes SET ? WHERE id = ?', // ? = {title, content}
    REGISTER: 'INSERT INTO users SET ?', // ? = {username, password, email}
    LOGIN: 'SELECT * FROM users WHERE username = ? AND password = ?',
}

export default QUERY;
const fetchNotes = () => {
    // Simulating an asynchronous API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const notes = [
          { id: 1, title: 'Note 1', content: 'Content of note 1' },
          { id: 2, title: 'Note 2', content: 'Content of note 2' },
          { id: 3, title: 'Note 3', content: 'Content of note 3' },
        ];
        resolve(notes);
      }, 1000);
    });
  };
  
  export { fetchNotes };
const initialState = {
  lists: [
    {
      id: '1',
      title: 'Monday',
      description: 'Things to do',
    },
    {
      id: '2',
      title: 'Tuesday',
      description: 'Things to do',
    },
    {
      id: '3',
      title: 'Wednesday',
      description: 'Things to do',
    },
  ],
  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Home',
    },
    {
      id: '2',
      listId: '2',
      title: 'Work',
    },
    {
      id: '3',
      listId: '3',
      title: 'Others',
    },
    {
      id: '4',
      listId: '3',
      title: 'Work',
    },
  ],
  cards: [
    {
      id: '1',
      columnId: '1',
      title: 'Clean bathroom',
      isImportant: false,
    },
    {
      id: '2',
      columnId: '3',
      title: 'Do shopping',
      isImportant: false,
    },
    {
      id: '3',
      columnId: '3',
      title: 'Read book',
      isImportant: false,
    },
    {
      id: '4',
      columnId: '3',
      title: 'Make cake',
      isImportant: false,
    },
    {
      id: '5',
      columnId: '3',
      title: 'Fix car',
      isImportant: false,
    },
    {
      id: '6',
      columnId: '1',
      title: 'Clean kitchen',
      isImportant: false,
    },
    {
      id: '7',
      columnId: '2',
      title: 'Prepare CV',
      isImportant: false,
    },
    {
      id: '8',
      columnId: '4',
      title: 'Search new job',
      isImportant: false,
    },
  ],
  search: '',
};

export default initialState;

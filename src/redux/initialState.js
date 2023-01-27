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
    },
    {
      id: '2',
      columnId: '3',
      title: 'Do shopping',
    },
    {
      id: '3',
      columnId: '3',
      title: 'Read book',
    },
    {
      id: '4',
      columnId: '3',
      title: 'Make cake',
    },
    {
      id: '5',
      columnId: '3',
      title: 'Fix car',
    },
    {
      id: '6',
      columnId: '1',
      title: 'Clean kitchen',
    },
    {
      id: '7',
      columnId: '2',
      title: 'Prepare CV',
    },
    {
      id: '7',
      columnId: '4',
      title: 'Prepare CV',
    },
  ],
  search: '',
};

export default initialState;

import { v4 as uuid } from 'uuid';
import initRows from './initRows';

const initColumns = {
    [uuid()]: {
      name: "Backlog",
      items: initRows
    },
    [uuid()]: {
      name: "To do..",
      items: []
    },
    [uuid()]: {
      name: "In Progress",
      items: []
    },
    [uuid()]: {
      name: "Done",
      items: []
    }
};

export default initColumns;
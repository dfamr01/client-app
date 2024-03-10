import SocketRouter from 'utilities/SocketRouter';
import chatRoutes from 'websockets/routes/chat.routes';
import pollsRoutes from "websockets/routes/polls.routes";
//import notificationRoutes from '../websockets/routes/notification.routes';
let socketRouter = null;
export default function websockets() {
  socketRouter = new SocketRouter();
  chatRoutes(socketRouter);
  pollsRoutes(socketRouter);
  //  notificationRoutes(socketRouter);

  return socketRouter;
};

export function getRouter() {
  return socketRouter;
}

export function getSocket() {
  return socketRouter.socket;
}

const emit = (event, routeSelector, routeName, toRoom, data, func) => {
  socketRouter.socket.emit(event, routeSelector, routeName, [toRoom, data], func);
}

function sendPromisified(event, routeSelector, routeName, toRoom, data) {
  return new Promise((resolve, reject) => {
    emit(event, routeSelector, routeName, toRoom, data, (res) => {
      if (res.status === 'ok') {
        resolve(res.data);
      } else {
        reject(res.error);
      }
    });
  });
}

export function websocketEmit(event, routeSelector, routeName, toRoom, data, async) {
  if (async) {
    emit(event, routeSelector, routeName, toRoom, data);
    return;
  }
  return sendPromisified(event, routeSelector, routeName, toRoom, data);
}
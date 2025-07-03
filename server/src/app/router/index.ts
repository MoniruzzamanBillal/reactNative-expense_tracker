import { Router } from "express";
import { transactionRouter } from "../modules/transaction/transaction.route";

const router = Router();

const routeArray = [
  {
    path: "/transactions",
    route: transactionRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;

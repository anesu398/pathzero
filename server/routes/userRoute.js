import express from "express";
import { 
  createUser, 
  loginUser, 
  bookVisit, 
  getAllBookings, 
  cancelBooking, 
  toFav, 
  getAllFavorites 
} from "../controllers/userCntrl.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // Use your own token verification middleware
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/bookVisit/:id", verifyToken, bookVisit);
router.post("/allBookings", verifyToken, getAllBookings);
router.post("/removeBooking/:id", verifyToken, cancelBooking);
router.post("/toFav/:rid", verifyToken, toFav);
router.post("/allFav/", verifyToken, getAllFavorites);

export { router as userRoute };

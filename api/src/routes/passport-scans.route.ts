import { Router } from 'express';
import { 
  getAllPassportScans, 
  getPassportScanById, 
  createPassportScan, 
  updatePassportScan, 
  deletePassportScan 
} from '../controllers/passport-scans.controller';

const router: Router = Router();

// Получить все сканы паспортов
router.get('/', getAllPassportScans);

// Получить скан паспорта по ID
router.get('/:id', getPassportScanById);

// Создать запись для скана паспорта
router.post('/', createPassportScan);

// Обновить запись скана паспорта по ID
router.put('/:id', updatePassportScan);

// Удалить запись скана паспорта по ID
router.delete('/:id', deletePassportScan);

export default router;

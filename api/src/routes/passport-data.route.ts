import { Router } from 'express';
import { 
  getAllPassportData, 
  getPassportDataById, 
  createPassportData, 
  updatePassportData, 
  deletePassportData 
} from '../controllers/passport-data.controller';

const router: Router = Router();

// Получить все паспортные данные
router.get('/', getAllPassportData);

// Получить паспортные данные по ID
router.get('/:id', getPassportDataById);

// Создать запись паспортных данных
router.post('/', createPassportData);

// Обновить паспортные данные по ID
router.put('/:id', updatePassportData);

// Удалить паспортные данные по ID
router.delete('/:id', deletePassportData);

export default router;

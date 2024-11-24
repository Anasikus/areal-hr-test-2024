import { Router } from 'express';
import { 
  getAllPositions, 
  getPositionById, 
  createPosition, 
  updatePosition, 
  deletePosition 
} from '../controllers/positions.controller';

const router: Router = Router();

// Получение всех должностей
router.get('/', getAllPositions);

// Получение должности по ID
router.get('/:id', getPositionById);

// Создание новой должности
router.post('/', createPosition);

// Обновление должности по ID
router.put('/:id', updatePosition);

// Удаление должности по ID
router.delete('/:id', deletePosition);

export default router;

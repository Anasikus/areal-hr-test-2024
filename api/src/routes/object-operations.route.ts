import { Router } from 'express';
import { 
  getAllOperations, 
  getOperationById, 
  createOperation, 
  updateOperation, 
  deleteOperation 
} from '../controllers/object-operations.controller';

const router: Router = Router();

// Получить все операции
router.get('/', getAllOperations);

// Получить операцию по ID
router.get('/:id', getOperationById);

// Создать новую операцию
router.post('/', createOperation);

// Обновить операцию по ID
router.put('/:id', updateOperation);

// Удалить операцию по ID
router.delete('/:id', deleteOperation);

export default router;

import { Router } from 'express';
import { 
  getAllDepartments, 
  getDepartmentById, 
  createDepartment, 
  updateDepartment, 
  deleteDepartment 
} from '../controllers/departments.controller';

const router: Router = Router();

// Получение всех отделов
router.get('/', getAllDepartments);

// Получение отдела по ID
router.get('/:id', getDepartmentById);

// Создание нового отдела
router.post('/', createDepartment);

// Обновление отдела по ID
router.put('/:id', updateDepartment);

// Удаление отдела по ID
router.delete('/:id', deleteDepartment);

export default router;

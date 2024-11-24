import { Router } from 'express';
import { 
  getAllEmployees, 
  getEmployeeById, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee 
} from '../controllers/employees.controller';

const router: Router = Router();

// Получение всех сотрудников
router.get('/', getAllEmployees);

// Получение сотрудника по ID
router.get('/:id', getEmployeeById);

// Создание нового сотрудника
router.post('/', createEmployee);

// Обновление сотрудника по ID
router.put('/:id', updateEmployee);

// Удаление сотрудника по ID
router.delete('/:id', deleteEmployee);

export default router;

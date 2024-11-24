import { Router } from 'express';
import { 
  getAllOrganizations, 
  getOrganizationById, 
  createOrganization, 
  updateOrganization, 
  deleteOrganization 
} from '../controllers/organizations.controller';

const router: Router = Router();

// Получить все организации
router.get('/', getAllOrganizations);

// Получить организацию по ID
router.get('/:id', getOrganizationById);

// Создать новую организацию
router.post('/', createOrganization);

// Обновить организацию по ID
router.put('/:id', updateOrganization);

// Удалить организацию по ID
router.delete('/:id', deleteOrganization);

export default router;

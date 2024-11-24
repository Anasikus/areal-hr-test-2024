import { Router } from 'express';
import { 
  getAllRegistrationAddresses, 
  getRegistrationAddressById, 
  createRegistrationAddress, 
  updateRegistrationAddress, 
  deleteRegistrationAddress 
} from '../controllers/registration-address.controller';

const router: Router = Router();

// Получить все адреса регистрации
router.get('/', getAllRegistrationAddresses);

// Получить адрес регистрации по ID
router.get('/:id', getRegistrationAddressById);

// Создать новый адрес регистрации
router.post('/', createRegistrationAddress);

// Обновить адрес регистрации по ID
router.put('/:id', updateRegistrationAddress);

// Удалить адрес регистрации по ID
router.delete('/:id', deleteRegistrationAddress);

export default router;

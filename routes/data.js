// ===== MODULES ===============================================================
import express from 'express';

// ===== MESSENGER =============================================================
import sendApi from '../messenger-api-helpers/send';
import receiveApi from '../messenger-api-helpers/receive';

// ===== STORES ================================================================
import UserStore from '../stores/user-store';

const router = express.Router();


router.get('/', (res) => {
  var iterator1 = UserStore.values();
  const userJSON = JSON.stringify(iterator1.next().value);

  console.log(`GET User response: ${userJSON}`);

  res.setHeader('Content-Type', 'application/json');
  res.send(userJSON);
});

export default router;
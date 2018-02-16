import * as assert from 'assert'
import {removeUndefined, txFlags} from '../../common'

function parseCheckCancel(tx: any): Object {
  assert(tx.TransactionType === 'CheckCancel')

  return removeUndefined({

    // ID of the Check ledger object to cancel
    checkID: tx.CheckID
  })
}

export default parseCheckCancel

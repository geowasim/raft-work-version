import { useState } from "react";
import Dialog from "./Dialog";

function BeforePayment({
  handleIsPrint,
  resetCartItems,
  handlePrint,
  createInvoice,
  method,
}) {
  const [isPay, setIsPay] = useState(false);
  const [hideQuestionShowPay, setHideQuestionShowPay] = useState(false);
  return (
    <>
      {method === "Mada" && (
        <div>
          <p>هل تريد الاستمرار؟</p>
          <button onClick={() => setHideQuestionShowPay(true)}>
            {" "}
            استمرار نحو طباعة الفاتورة
          </button>
        </div>
      )}
      {hideQuestionShowPay && (
        <Dialog
          setHideQuestionShowPay={setHideQuestionShowPay}
          message="Do you want to print?"
          nameProduct="33"
        />
      )}
    </>
  );
}

export default BeforePayment;
/**
 * {method === "Mada" ? (
        // هل يريد العميل ؟ نعم .. اظهار الدفع :الغاء العملية
        <>
          <button
            onClick={() => {
              setIsPay(true);
            }}
          >
            Continue
          </button>
          {isPay ? (
            <button
              className="itemButton pay"
              onClick={() => {
                handlePrint();
                resetCartItems();
                handleIsPrint();
                createInvoice();
              }}
            >
              الدفع - طباعة
            </button>
          ) : null}
          <button onClick={resetCartItems}>Cancel</button>
        </>
      ) : null}
 */

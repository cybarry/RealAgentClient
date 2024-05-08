import React, { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core'


// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//     <Modal
//         opened={opened}
//         setOpened={opened}
//         title="Select your date of visit"
//         centered
//     >
//         <div>
//             <span>Book now!!!</span>
//         </div>
//     </Modal>

// }
const BookingModal = ()=> {
const [opened, { open, close }, email, propertyId] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        <div>
            <span>Book now!!!</span>
        </div>

      </Modal>

      <Button onClick={open}>Book</Button>
    </>
  );
}

export default BookingModal;
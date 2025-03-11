import { useState } from 'react';
import { motion } from 'motion/react';
import MatchOptionStatus from './MatchOptionStatus';
import DuoFindStatus from './DuoFindStatus';
import DuoFindStartStatus from './InitialStatus';
import DuoFindingStatus from './DuoFindingStatus';
import DuoEndConfirmStatus from './DuoEndConfirmStatus';
import DuoEndedStatus from './DuoEndedStatus';
import InitialStatus from './InitialStatus';
const MatchSidebar = () => {
  const [step, setStep] = useState(0);
  const [isMatched, setIsMatched] = useState(false);
  const [isMatchAccepted, setIsMatchAccepted] = useState(false);
  const [isMatchRejected, setIsMatchRejected] = useState(false);

  const onClickDuoFindStartBtn = () => {
    setStep((prev: number) => 1);
  };
  const onClickFindCancelDuoBtn = () => {
    setStep((prev: number) => 3);
  };
  const onClickCloseOptionsBtn = () => {
    setStep((prev: number) => 0);
  };

  const onClickMatchingStartBtn = () => {
    setStep((prev: number) => 2);
  };
  const onClickMatchAccept = () => {
    setIsMatchAccepted(true);
    setStep((prev: number) => 4);
  };
  const onClickMatchReject = () => {
    setIsMatchRejected(true);
    setStep((prev: number) => 1);
  };
  const onClickDuoEndBtn = () => {
    setStep((prev: number) => 5);
    setIsMatched(false);
  };
  const onClickDuoEndConfirmBtn = () => {
    setStep((prev: number) => 6);
  };
  return (
    <>
      <motion.div
        className="w-295 py-20 bg-secondary-realdarkgray rounded-15 overflow-hidden "
        layout
        layoutRoot
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        {step === 0 && (
          <motion.div layout className="w-full flex flex-col items-center">
            <DuoFindStartStatus
              onClickDuoFindStartBtn={onClickDuoFindStartBtn}
            />
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="w-full flex flex-col gap-24 items-center"
          >
            <MatchOptionStatus
              onClickMatchingStartBtn={onClickMatchingStartBtn}
              onClickCloseOptionsBtn={onClickCloseOptionsBtn}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="w-full flex flex-col gap-24 items-center"
          >
            <DuoFindingStatus
              onClickDuoFindCancelBtn={onClickFindCancelDuoBtn}
            />
          </motion.div>
        )}
        {step === 3 && (
          // <div className="w-307 h-546 bg-secondary-realdarkgray pt-18 px-10 rounded-12 flex flex-col items-center">
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeIn',
            }}
            className="w-full"
          >
            <DuoFindStatus
              onClickMatchAccept={onClickMatchAccept}
              onClickMatchReject={onClickMatchReject}
            />
          </motion.div>
        )}
        {
          // <div className="w-307 h-146 flex flex-col items-center bg-secondary-realdarkgray rounded-12 pt-18 px-10">
          step === 4 && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: 'linear',
              }}
              className="w-full flex flex-col items-center"
            >
              <InitialStatus onClickDuoEndBtn={onClickDuoEndBtn} />
            </motion.div>
          )
        }
        {step === 5 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="w-full flex flex-col items-center"
          >
            <DuoEndConfirmStatus
              onClickDuoEndConfirmBtn={onClickDuoEndConfirmBtn}
            />
          </motion.div>
        )}
        {step === 6 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="w-full flex flex-col items-center"
          >
            <DuoEndedStatus />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default MatchSidebar;

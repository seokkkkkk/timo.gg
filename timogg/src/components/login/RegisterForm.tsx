import React from 'react';
import Button from '../common/Button';
import { Input } from '../common/Input';

function RegisterForm() {
  return (
    <div className="mb-[64px] flex flex-col gap-[8px]">
      <div className="flex flex-col gap-[8px] mb-[12px]">
        <div className="flex gap-[8px] flex-row">
          <Input type="text" placeholder="소환사명" />
          <Input type="text" placeholder="태그" width={100} />
        </div>

        <Input type="text" placeholder="닉네임" />
      </div>
      <Button type="submit" width={305} height={53} label="등록하기" />
    </div>
  );
}

export default RegisterForm;

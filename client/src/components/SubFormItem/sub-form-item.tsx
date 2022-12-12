import React from 'react'
import './sub-form-item.css';

type Props = {
  label: string;
  placeholder: string;
  data?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  dataList?: boolean;
  type: string;
  min?: string;
  hasSection?: boolean;
}

function SubFormItem({ label, placeholder, data, onChange, dataList, type, min, hasSection }: Props) {
  return (<>
    {hasSection ?
      <section className='form-input'>
        {/* <label className='form-input-label'>{label}</label> */}
        <input className='form-input-box'
          data-testid="form-input-box"
          type={type}
          min={min ? min : undefined}
          list={dataList ? 'cycleData' : undefined}
          value={data}
          placeholder={placeholder}
          onChange={onChange}
        />
      </section>
      :
      <>
        {/* <label className='form-input-label'>{label}</label> */}
        <input className={'form-input-box' + ` ${type === 'date' ? 'form-date': null} ${type === 'datetime-local' ? 'form-date': null}`}
          data-testid="form-input-box"
          type={type}
          min={min ? min : undefined}
          list={dataList ? 'cycleData' : undefined}
          value={data ? data : undefined}
          placeholder={placeholder}
          onChange={onChange}
        />
      </>
    }
  </>
  )
}

export default SubFormItem;
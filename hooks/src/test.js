import React from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  useFormTableQuery,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/next'
import { Input } from '@formily/next-components'
import { fetch } from 'mfetch'
import { Table, Pagination } from '@alifd/next'

const service = ({ values, pagination, sorter = {}, filters = {} }) => {
  return fetch({
    url: 'https://randomuser.me/api',
    data: {
      results: pagination.pageSize,
      sortField: sorter.field,
      sortOrder: sorter.order,
      page: pagination.current,
      ...values,
      ...filters
    }
  })
    .then(res => res.json())
    .then(({ results, info }) => {
      return {
        dataSource: results,
        ...pagination,
        total: 200
      }
    })
}

 function App (){
  const { form, table, pagination } = useFormTableQuery(service)
  const submit = ()=>{
    console.log(form.effects,table,888)
    table.onFilter()
    // form.effects(()=>{},()=>{
    //   console.log(123123)
    // })
   
  }
  return (
    <>
      <SchemaForm
        {...form}
        components={{ Input }}
        style={{ marginBottom: 20 }}
        inline
      >
        <Field type="string" name="name" title="Name" x-component="Input" />
        <FormButtonGroup>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
      <Table {...table} hasBorder={true}  rowKey={record => record.login.uuid}>
        <Table.Column
          sortable
          title="name"
          dataIndex="name"
          cell={(val, idx, record) => {
            return <Submit onClick={submit}></Submit>
          }}
        />
        <Table.Column
          filters={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' }
          ]}
          title="gender"
          dataIndex="gender"
        />
        <Table.Column title="email" dataIndex="email" />
      </Table>
      <Pagination
        {...pagination}
        style={{ marginTop: 10 }}
        pageSizeSelector="filter"
      />
    </>
  )
}

export default App
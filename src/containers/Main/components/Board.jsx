import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#0D2559" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#000000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#FC7A00" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#FC0000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#1BEE0A" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
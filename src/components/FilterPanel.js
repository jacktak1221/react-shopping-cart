import React from 'react';
import {Typography, Grid, Button, Select, MenuItem} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {changeSortingSeq, filterItemByNames, resetFilter} from "../redux/actions/actions";


const FilterPanel = () => {

    const filterInfo = useSelector(state => state.filterInfo);
    const dispatch = useDispatch();
    const productList = filterInfo.filteredProductList;


    return (
        <div>
            <Grid container
                  direction="row"
                  alignItems="center"
                  spacing={2}
            >
                <Grid item xs={12} md={5}>
                    <Autocomplete
                        multiple
                        id="free-solo-2-demo"
                        disableClearable
                        options={productList}
                        getOptionLabel={(data) => data.author}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search input"
                                margin="normal"
                                variant="outlined"
                                InputProps={{...params.InputProps, type: 'search'}}
                            />
                        )}
                        value={[]}
                        onChange={(event, value) => dispatch(filterItemByNames(event, value))}
                    />
                </Grid>

                <Grid item xs={12} md={2}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={filterInfo.sortingDirection}
                        onChange={(event) => dispatch(changeSortingSeq(event))}
                        label="Sorting"
                    >
                        <MenuItem value={'asc'}>Sort By Author Ascending</MenuItem>
                        <MenuItem value={'dsc'}>Sort By Author Descending</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={6} md={2}>
                    <Typography>
                        Filter Result: {productList.length}
                    </Typography>
                </Grid>

                <Grid item xs={6} md={1}>
                    <Button color={"primary"} variant={"outlined"}
                            onClick={() => dispatch(resetFilter())}>
                        Reset
                    </Button>
                </Grid>

            </Grid>

        </div>
    );

}

export default FilterPanel;

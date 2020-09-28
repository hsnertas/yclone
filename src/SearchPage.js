import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
         < TuneOutlinedIcon/>
         <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
        image="data:image/png;base64,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"
        channel="Clever Programmer"
        verified
        subs="650K"
        noOfVideos={382}
        description="You can find awesome programming stuffs"
        />
        <hr/>
        </div>
    )
}

export default SearchPage

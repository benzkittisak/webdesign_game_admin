import React from 'react';

import GAME_LIST from '../../data/game.data';

const ProductTable = () => {
    const currencyFormatter = new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
      })

    return(
        <table className="product-table table table-hover">
        <thead>
            <tr>
                <th>
                    รูปปก
                </th>
                <th>
                    ชื่อเกม
                </th>
                <th>
                    ประเภท
                </th>
                <th>
                    ราคา
                </th>
                <th>
                    จำนวน
                </th>
                <th>
                    จัดการ
                </th>
            </tr>
        </thead>
        <tbody className="overflow-y-scroll">
            {GAME_LIST.map((game , index) => (
                <tr key={index}>
                    <td width="20%">
                        <img src={game.poster} className="img-fluid product-table-img" alt="" />
                    </td>
                    <td align="center" valign="middle">
                        {game.name}
                    </td>
                    <td align="center" valign="middle">
                        {game.type.join(' , ')}
                    </td>
                    <td align="center" valign="middle">
                        {currencyFormatter.format(game.price)}
                    </td>
                    <td align="center" valign="middle">
                        {game.stock}
                    </td>
                    <td align="center" valign="middle">
                        <button className="btn btn-danger">
                            <i className="fal fa-trash-alt"></i>    
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
     </table>
    )
}

export default ProductTable;
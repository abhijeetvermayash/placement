import React from "react";
import "./table2.css";

class Table3 extends React.Component {
  render() {
    return (
      <div className="tableclass">
        <center>
          <table class="table">
            <thead>
              <tr>
                <th>S No.</th>
                <th>COMPANY NAME</th>
                <th>OFFERS</th>
                {/* <th>Marks%</th>
              <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="YEAR">1</td>
                <td data-label="COMPANIES VISITED">ACCELALPHA</td>
                <td data-label="STATISTICS">19</td>
              </tr>
              <tr>
                <td data-label="YEAR">2</td>
                <td data-label="COMPANIES VISITED">ACCENTURE</td>
                <td data-label="STATISTICS">37</td>
              </tr>
              <tr>
                <td data-label="YEAR">3</td>
                <td data-label="COMPANIES VISITED">AMADEUS</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">4</td>
                <td data-label="COMPANIES VISITED">AMAGI</td>
                <td data-label="STATISTICS">2</td>
              </tr>
              <tr>
                <td data-label="YEAR">5</td>
                <td data-label="COMPANIES VISITED">AMAZON</td>
                <td data-label="STATISTICS">5</td>
              </tr>
              <tr>
                <td data-label="YEAR">6</td>
                <td data-label="COMPANIES VISITED">AMDOCS</td>
                <td data-label="STATISTICS">24</td>
              </tr>
              <tr>
                <td data-label="YEAR">7</td>
                <td data-label="COMPANIES VISITED">AXELOR</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">8</td>
                <td data-label="COMPANIES VISITED">BETSOL</td>
                <td data-label="STATISTICS">1</td>
              </tr>
              <tr>
                <td data-label="YEAR">9</td>
                <td data-label="COMPANIES VISITED">BOEING</td>
                <td data-label="STATISTICS">8</td>
              </tr>
              <tr>
                <td data-label="YEAR">10</td>
                <td data-label="COMPANIES VISITED">BRANE</td>
                <td data-label="STATISTICS">1</td>
              </tr>
              <tr>
                <td data-label="YEAR">11</td>
                <td data-label="COMPANIES VISITED">BRILLIO</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">12</td>
                <td data-label="COMPANIES VISITED">CAPGEMININI</td>
                <td data-label="STATISTICS">68</td>
              </tr>
              <tr>
                <td data-label="YEAR">13</td>
                <td data-label="COMPANIES VISITED">CIMPRESS</td>
                <td data-label="STATISTICS">8</td>
              </tr>
              <tr>
                <td data-label="YEAR">14</td>
                <td data-label="COMPANIES VISITED">CISCO</td>
                <td data-label="STATISTICS">6</td>
              </tr>
              <tr>
                <td data-label="YEAR">15</td>
                <td data-label="COMPANIES VISITED">COGNIZANT</td>
                <td data-label="STATISTICS">136</td>
              </tr>
              <tr>
                <td data-label="YEAR">16</td>
                <td data-label="COMPANIES VISITED">COMVIVA</td>
                <td data-label="STATISTICS">14</td>
              </tr>
              <tr>
                <td data-label="YEAR">17</td>
                <td data-label="COMPANIES VISITED">CSG</td>
                <td data-label="STATISTICS">1</td>
              </tr>
              <tr>
                <td data-label="YEAR">18</td>
                <td data-label="COMPANIES VISITED">DATACORP TRAFFIC</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">19</td>
                <td data-label="COMPANIES VISITED">DELL</td>
                <td data-label="STATISTICS">5</td>
              </tr>
              <tr>
                <td data-label="YEAR">20</td>
                <td data-label="COMPANIES VISITED">DELOITTE</td>
                <td data-label="STATISTICS">4</td>
              </tr>
              <tr>
                <td data-label="YEAR">21</td>
                <td data-label="COMPANIES VISITED">ECOLAB</td>
                <td data-label="STATISTICS">8</td>
              </tr>
              <tr>
                <td data-label="YEAR">22</td>
                <td data-label="COMPANIES VISITED">ELLUCIAN</td>
                <td data-label="STATISTICS">12</td>
              </tr>
              <tr>
                <td data-label="YEAR">23</td>
                <td data-label="COMPANIES VISITED">EPICOR</td>
                <td data-label="STATISTICS">4</td>
              </tr>
              <tr>
                <td data-label="YEAR">24</td>
                <td data-label="COMPANIES VISITED">FIDELITY</td>
                <td data-label="STATISTICS">18</td>
              </tr>
              <tr>
                <td data-label="YEAR">25</td>
                <td data-label="COMPANIES VISITED">GENPACT</td>
                <td data-label="STATISTICS">1</td>
              </tr>
              <tr>
                <td data-label="YEAR">26</td>
                <td data-label="COMPANIES VISITED">HCL</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">27</td>
                <td data-label="COMPANIES VISITED">IBM</td>
                <td data-label="STATISTICS">2</td>
              </tr>
              <tr>
                <td data-label="YEAR">28</td>
                <td data-label="COMPANIES VISITED">INFOSYS</td>
                <td data-label="STATISTICS">23</td>
              </tr>
              <tr>
                <td data-label="YEAR">29</td>
                <td data-label="COMPANIES VISITED">KANTAR AQ</td>
                <td data-label="STATISTICS">4</td>
              </tr>
              <tr>
                <td data-label="YEAR">30</td>
                <td data-label="COMPANIES VISITED">L&T</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">31</td>
                <td data-label="COMPANIES VISITED">MERCEDES BENZ</td>
                <td data-label="STATISTICS">6</td>
              </tr>
              <tr>
                <td data-label="YEAR">32</td>
                <td data-label="COMPANIES VISITED">MICROCHIP</td>
                <td data-label="STATISTICS">5</td>
              </tr>
              <tr>
                <td data-label="YEAR">33</td>
                <td data-label="COMPANIES VISITED">MICROFOCUS</td>
                <td data-label="STATISTICS">6</td>
              </tr>
              <tr>
                <td data-label="YEAR">34</td>
                <td data-label="COMPANIES VISITED">MISTRAL</td>
                <td data-label="STATISTICS">8</td>
              </tr>
              <tr>
                <td data-label="YEAR">35</td>
                <td data-label="COMPANIES VISITED">MU SIGMA</td>
                <td data-label="STATISTICS">31</td>
              </tr>
              <tr>
                <td data-label="YEAR">36</td>
                <td data-label="COMPANIES VISITED">ONE DIRECT</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">37</td>
                <td data-label="COMPANIES VISITED">OPTUM</td>
                <td data-label="STATISTICS">18</td>
              </tr>
              <tr>
                <td data-label="YEAR">38</td>
                <td data-label="COMPANIES VISITED">ORACLE</td>
                <td data-label="STATISTICS">15</td>
              </tr>
              <tr>
                <td data-label="YEAR">39</td>
                <td data-label="COMPANIES VISITED">PERSISTENT</td>
                <td data-label="STATISTICS">42</td>
              </tr>
              <tr>
                <td data-label="YEAR">40</td>
                <td data-label="COMPANIES VISITED">PROFINCH</td>
                <td data-label="STATISTICS">15</td>
              </tr>
              <tr>
                <td data-label="YEAR">41</td>
                <td data-label="COMPANIES VISITED">PUBLCIS SAPIENT</td>
                <td data-label="STATISTICS">5</td>
              </tr>
              <tr>
                <td data-label="YEAR">42</td>
                <td data-label="COMPANIES VISITED">PWC</td>
                <td data-label="STATISTICS">9</td>
              </tr>
              <tr>
                <td data-label="YEAR">43</td>
                <td data-label="COMPANIES VISITED">QSPIDER</td>
                <td data-label="STATISTICS">16</td>
              </tr>
              <tr>
                <td data-label="YEAR">44</td>
                <td data-label="COMPANIES VISITED">ROBOSOFT</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">45</td>
                <td data-label="COMPANIES VISITED">ROBERT BOSCH</td>
                <td data-label="STATISTICS">37</td>
              </tr>
              <tr>
                <td data-label="YEAR">46</td>
                <td data-label="COMPANIES VISITED">SAP</td>
                <td data-label="STATISTICS">8</td>
              </tr>
              <tr>
                <td data-label="YEAR">47</td>
                <td data-label="COMPANIES VISITED">SAPIENTURY</td>
                <td data-label="STATISTICS">1</td>
              </tr>
              <tr>
                <td data-label="YEAR">48</td>
                <td data-label="COMPANIES VISITED">TARGET</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">49</td>
                <td data-label="COMPANIES VISITED">TCS</td>
                <td data-label="STATISTICS">45</td>
              </tr>
              <tr>
                <td data-label="YEAR">50</td>
                <td data-label="COMPANIES VISITED">TEKSYSTEM</td>
                <td data-label="STATISTICS">2</td>
              </tr>
              <tr>
                <td data-label="YEAR">51</td>
                <td data-label="COMPANIES VISITED">THE MATH COMPANY</td>
                <td data-label="STATISTICS">3</td>
              </tr>
              <tr>
                <td data-label="YEAR">52</td>
                <td data-label="COMPANIES VISITED">TRUMINDS</td>
                <td data-label="STATISTICS">6</td>
              </tr>
              <tr>
                <td data-label="YEAR">53</td>
                <td data-label="COMPANIES VISITED">WIPRO</td>
                <td data-label="STATISTICS">23</td>
              </tr>
              <tr>
                <td data-label="YEAR">54</td>
                <td data-label="COMPANIES VISITED">WIZERGOS</td>
                <td data-label="STATISTICS">2</td>
              </tr>
              <tr>
                <td data-label="YEAR">55</td>
                <td data-label="COMPANIES VISITED">ZENSAR</td>
                <td data-label="STATISTICS">19</td>
              </tr>
              <tr>
                <td data-label="YEAR">56</td>
                <td data-label="COMPANIES VISITED">ZS ASSOCIATES</td>
                <td data-label="STATISTICS">3</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default Table3;

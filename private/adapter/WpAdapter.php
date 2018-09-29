<?php
include_once dirname( __FILE__ ) . '/../logger.php';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class WpAdapter {

         /**
     * Action argument used by the nonce validating the AJAX request.
     *
     * @var Logger
     */
    protected $logger;

    function __construct($logger)
    {
        $this->logger = $logger;    
    }

    public function AddAction($action,$object,$function)
    {
        $this->logger->Call("AddAction");
        $this->logger->Info("Add action: $action");

        add_action('wp_ajax_' . $action, array($object, $function));
        add_action('wp_ajax_nopriv_' . $action, array($object, $function));
    }

    public function GetPost($key)
    {
        $this->logger->Call("GetPost");
        $this->logger->Info("Key: $key");

        $val = $_POST[$key];
        $this->logger->Info("Val: $val");

        return $val;
    }

    public function WpDie()
    {
        wp_die();
    }
}


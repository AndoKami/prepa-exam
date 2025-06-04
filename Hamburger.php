<?php

class Hamburger {
    public ?string $mofo = null;
    public ?string $hena = null;
    public ?string $sauces = null;

    public function description() : string {
        return sprintf('Hei burger with sea vacancy %s %s %s', $this->mofo, $this->hena, $this->sauces);
    }

    public function setMofo(?string $mofoType)
    {
        $this->mofo = $mofoType;

        return $this;
    }

    public function setHena(?string $henaType)
    {
        $this->hena = $henaType;

        return $this;
    }

    public function setSauces(?string $sauceType)
    {
        $this->sauces = $sauceType;

        return $this;
    }

}

class HamburgerBuilder {
    public $humburger;
    public function __construct() {
        $this->humburger = new Hamburger();
    }

    public function setMofo(?string $mofoType)
    {
        $this->humburger->setMofo($mofoType);

        return $this;
    }

    public function setHena(?string $henaType)
    {
        $this->humburger->setHena($henaType);

        return $this;
    }

    public function setSauces(?string $sauceType)
    {
        $this->humburger->setSauces($sauceType);

        return $this;
    }

    public function build()
    {
        if (!$this->humburger->mofo) {
            throw new Exception("Mofo is required");
        }

        return $this->humburger;
    }
}

$newHamburger = (new HamburgerBuilder())
                    ->setHena('Omby')
                    ->setSauces('Ketchup')
                    ->build();

echo $newHamburger->description();